import { Schema, model } from 'mongoose';

const videoTrendSchema = new Schema({
    'platform':{
        type: String,
        required: true,
        unique: false
    },
    'time': {
        type: Date,
    },
    'trend': {
        type: String
    },
    'trend_type': {
        type: String
    },
    'music': {
        type: String
    },
    'music_genre': {
        type: String
    },
    'video_style': {
        type: String
    },
    'theme': {
        type: String
    },
    'part_of_song': {
        type: String
    },
    'video_length': {
        type: Number
    },
});

export const VideoTrend = model('VideoTrend', videoTrendSchema);