

class API{
  constructor(img_size){
    this.url = `https://picsum.photos/${img_size}`;
    this.used_ids = [];
  }

  get_image = async () => {
    const response = await fetch(this.url, {mode: 'cors'});
    let string = response.url.replace("https://fastly.picsum.photos/id/", "").split('/');
    return {
      url: response.url,
      id: string[0],
      size: string[1]
    }
  }
}
export default API;