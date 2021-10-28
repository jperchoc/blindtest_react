import {songs as SONGS} from '../../data/songs';
import Sidebar from '../sidebar/Sidebar';
import Song from '../song/Song';
import React from 'react';
import SongChangeButton from '../song-change-button/SongChangeButton';
import SongForm from '../song-form/SongForm';
import Results from '../Results/Results';
import {  Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
export default class BlindTest extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSelectedSongChange = this.handleSelectedSongChange.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.handleArtistInput = this.handleArtistInput.bind(this);
        this.state = {
            songs: SONGS.map((s) => ({
                artist:'',
                title: '',
                ...s
            })),
            selectedSong: null,
            maxIndex: 0,
            final: false
        };
    }

    componentDidMount() {
        this.setState({
            selectedSong: this.state.songs[0]
        })
    }

    handleTitleInput(e) {
        const songWithTitle = this.state.selectedSong;
        songWithTitle.title = e.target.value;
        this.setState({
            selectedSong: songWithTitle
        })
        
        
    }
    handleArtistInput(e) {
        const songWithTitle = this.state.selectedSong;
        songWithTitle.artist = e.target.value;
        this.setState({
            selectedSong: songWithTitle
        })
    }

    handleSelectedSongChange(song) {
        this.setState({
            selectedSong: this.state.songs.find((s) => s.file === song.file),
            final: false
        });
        console.log('song changed :', song)
    }
    handlePreviousClick() {
        const crtIdx = this.state.songs.indexOf(this.state.selectedSong);
        if (crtIdx > 0) {
            this.setState({
                selectedSong: this.state.songs[crtIdx-1],
                final: false
            })
        }
    }
    handleNextClick() {
        const crtIdx = this.state.songs.indexOf(this.state.selectedSong);
        if (crtIdx < this.state.songs.length - 1) {
            this.setState({
                selectedSong: this.state.songs[crtIdx+1]
            })
            if (crtIdx >= this.state.maxIndex) {
                this.setState({
                    maxIndex: crtIdx + 1
                });
            }
        } else if (crtIdx === this.state.songs.length -1) {
            this.setState({final: true})
        }
    }

    render() {
        return (
            this.state.selectedSong && 
            <Layout style={{marginTop: 64}}>
                <Sidebar  
                    selectedSong={this.state.selectedSong}
                    songs={this.state.songs.map((s, i) => ({
                        inactive: i > this.state.maxIndex,
                        ...s
                    }))} 
                    onSelect={this.handleSelectedSongChange}>
                </Sidebar>
                <Layout style={{padding: '0 24px 24px' }}>
                    <Content>
                    {
                        this.state.final ? 
                        <Results songs={this.state.songs} />
                        : 
                        <Song song={this.state.selectedSong}>
                            <SongChangeButton 
                                onPrevious={this.handlePreviousClick}
                                onNext={this.handleNextClick}
                                previousDisabled={this.state.selectedSong.file === this.state.songs[0].file}
                                isLast={this.state.selectedSong === this.state.songs[this.state.songs.length -1]}
                            >
                                <SongForm 
                                    song={this.state.selectedSong} 
                                    onTitleChange={this.handleTitleInput} 
                                    onArtistChange={this.handleArtistInput}
                                    onPressEnter={this.handleNextClick}
                                />
                            </SongChangeButton>
                        </Song>
                    } 
                    </Content>
                    
                </Layout>
            </Layout>
        );
    }
}