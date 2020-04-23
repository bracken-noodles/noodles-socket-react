import io from "socketIO";

// utils
const getCurrentPlatform = () => "web";
const createQuery = info =>
  Object.keys(info)
    .map(key => `${key}=${info[key]}`)
    .join("&");

export const channels = {};

export default ({
  channels: connections,
  userId,
  platform = getCurrentPlatform()
}) => {
  connections.forEach(channel => {
    channels[channel] = io(`/${channel}`, {
      query: createQuery({
        userId,
        platform
      })
    });
  });
};
