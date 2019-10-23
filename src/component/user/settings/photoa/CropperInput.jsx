import React, {Component, createRef} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

// const cropper = React.createRef(null);

class CropperInput extends Component {
    cropper = createRef();

    cropImage = () => {
        const {setImage} = this.props;
        if(typeof this.cropper.current.getCroppedCanvas() === 'undefined'){
            return;
        }
        this.cropper.current.getCroppedCanvas().toBlob(blob => {
            setImage(blob)
        }, 'image/jpeg')
    }

  render() {
      const {imagePreview} = this.props;
    return (
      <Cropper
        ref={this.cropper}
        src={imagePreview}
        style={{height: 200, width: '100%'}}
        preview='.img-preview'
        aspectRatio={1}
        viewMode={1}
        cropBoxMovable={true}
        cropBoxResizable={true}
        dragMode='move'
        scalable={true}
        guides={false}
        crop={this.cropImage} />
    );
  }
}
export default CropperInput