const {
  REACT_APP_BASE_URL,
  REACT_APP_SEGMENT_KEY,
  REACT_APP_CERTIFICATE,
  REACT_APP_BASE_URL_IMG,
  REACT_APP_BASE_URL_VIDEO,
} = process.env;

const appKey = 'movies';
const baseUrl = REACT_APP_BASE_URL;
const segmentKey = REACT_APP_SEGMENT_KEY;
const cetrificate = REACT_APP_CERTIFICATE;
const baseUrlImg = REACT_APP_BASE_URL_IMG;
const baseUrlVideo = REACT_APP_BASE_URL_VIDEO;

export {
  appKey,
  baseUrl,
  segmentKey,
  baseUrlImg,
  cetrificate,
  baseUrlVideo,
}
