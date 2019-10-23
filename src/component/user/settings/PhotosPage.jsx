import React, {useState, useEffect, Fragment} from 'react';
import {Image, Segment, Header, Divider, Grid, Button, Card} from 'semantic-ui-react';
import DropzoneIput from './photoa/DropzoneInput';
import CropperInput from './photoa/CropperInput';
import { connect } from 'react-redux';
import { uploadProfileImage } from '../UserActions';
import { toastr } from 'react-redux-toastr';

const actions ={
    uploadProfileImage
}
const PhotosPage =({uploadProfileImage}) => {
        const [files, setFiles] = useState([]);
        const [image, setImage] = useState(null);

        useEffect(() => {
            return () => {
                files.forEach(file => URL.revokeObjectURL(file.preview))
            }
        }, [files]);

        const handleUploadImage = async () => {
            try{
                await uploadProfileImage(image, files[0].name);
                handleCropCancel();
                toastr.success('Success', 'your photo has been uploaded')
            }
            catch(error)
            {
                console.log(error);
                toastr.error('Ooops', 'Something went wrong ')
            }
        }
        const handleCropCancel = () =>{
            setFiles([]);
            setImage(null);
        }

        return (
            <Segment>
                <Header dividing size='large' content='Your Photos' />
                <Grid>
                    <Grid.Row />
                    <Grid.Column width={4}>
                        <Header color='teal' sub content='Step 1 - Add Photo'/>
                        <DropzoneIput setFiles={setFiles}/>
                    </Grid.Column>
                    <Grid.Column width={1} />
                    <Grid.Column width={4}>
                        <Header sub color='teal' content='Step 2 - Resize image' />
                        {files.length > 0 && 
                        <CropperInput setImage={setImage} imagePreview={files[0].preview} />}
                    </Grid.Column>
                    <Grid.Column width={1} />
                    <Grid.Column width={4}>
                        <Header sub color='teal' content='Step 3 - Preview & Upload' />
                        {files.length > 0 && 
                           <Fragment>
                            <div className='img-preview'  style={{minHeight: '200px', minWidth: '200px', overflow:'hidden'}} />
                            <Button.Group>
                                <Button onClick={handleUploadImage} style={{width: '100px'}} positive icon='check'/>
                                <Button onClick={handleCropCancel} style={{width: '100px'}} negative icon='close'/>
                            </Button.Group>
                           </Fragment> 
                        }
                    </Grid.Column>

                </Grid>
                
                <Divider/>
                <Header sub color='teal' content='All Photos'/>

                <Card.Group itemsPerRow={5}>
                    <Card>
                        <Image src='https://randomuser.me/api/portraits/women/35.jpg'/>
                        <Button positive>Main Photo</Button>
                    </Card>

                        <Card >
                            <Image
                                src='https://randomuser.me/api/portraits/women/19.jpg'
                            />
                            <div className='ui two buttons'>
                                <Button basic color='green'>Main</Button>
                                <Button basic icon='trash' color='red' />
                            </div>
                        </Card>
                </Card.Group>
            </Segment>
        );
    
}

export default connect(null, actions)(PhotosPage);