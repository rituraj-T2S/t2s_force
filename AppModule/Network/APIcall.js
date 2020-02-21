import axios from 'axios';

export const APIcall = {
    takeAwayList: PostCode => {
    axios.post('https://qa-api.t2scdn.com', {postcode: PostCode}).then(response => console.log((response)));
  },
};

