import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Icon, Header } from 'semantic-ui-react'


const DropzoneIput = ({setFiles}) =>  {
  const onDrop = useCallback(acceptedFiles => {
    
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    
  }, [setFiles])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      multiple: false,
      accept: 'image/*'
    })

  return (
    <div {...getRootProps()} className={'dropzone ' + (isDragActive && 'dropzone--isActive')}>
      <input {...getInputProps()} />
      <Icon name='upload' size='huge'/>
      <Header Content='Upload image here ' />
    </div>
  )
}
export default DropzoneIput