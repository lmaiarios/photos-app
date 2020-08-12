import React from 'react';
import Photo from './Photo';

class PhotoInfo extends React.Component{
    constructor(props){
        super(props);
        const {params: {id}} = props.match;
        this.state = {
            id: id,
            secret: undefined,
            server: undefined,
            farm: undefined,
            title: undefined,
            description: undefined
        }
    }

    fetchData = () => {
        console.log('Fez fetch');
        let api_key = 'f2034a845309732580dc6ab0b0604c26';
        fetch(
            `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${api_key}&photo_id=${this.state.id}&format=json&nojsoncallback=1`
        )
        .then(
            res => res.json()
        )
        .then(
            data => this.setState({
                secret: data.photo.secret,
                server: data.photo.server,
                farm: data.photo.farm,
                title: data.photo.title._content,
                description: data.photo.description._content
            })
        )
        .catch(
            (err) => alert('Erro na requisição')
        )
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){

        return (
            <>
                {
                    this.state.title &&

                    <div>
                        <Photo {...this.state}/>
                        <p>Title: {this.state.title}</p>
                        <p>Description: {this.state.description}</p>
                    </div>
                }
            </>
        );
    }

}

export default PhotoInfo;