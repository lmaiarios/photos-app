import React from 'react';
import Photo from './Photo';

class Photos extends React.Component{
    constructor(props){
        super(props);
        this.API_key = 'f2034a845309732580dc6ab0b0604c26';

        this.state = {
            n_photos: props.n_photos || 5,
            photos: [{
                title: undefined,
                id: undefined,
                farm: undefined,
                server: undefined,
                secret: undefined,
            }]
        }
    }

    fetchData = () => {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.API_key}&tags=${this.props.tag}&per_page=${this.state.n_photos}&format=json&nojsoncallback=1`)
            .then(
                res => res.json()
            )
            .then(
                data => {
                    let photos = data.photos.photo.map(
                        photo => {
                            return {
                                title: photo.title,
                                id: photo.id,
                                farm: photo.farm,
                                server: photo.server,
                                secret: photo.secret
                            }
                        }
                    );
                    this.setState({photos})
                }
            )
    }

    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps){
        if (this.props.tag !== prevProps.tag){
            this.fetchData();
        }
    }

    render(){
        return (
            <>
                {this.state.photos[0].title
                &&
                this.state.photos.map(
                    photo => <Photo
                                farm={photo.farm}
                                server={photo.server}
                                secret={photo.secret}
                                title={photo.title}
                                id={photo.id}
                                key={photo.id}
                            />
                )}
            </>
        );
    }
}


export default Photos;