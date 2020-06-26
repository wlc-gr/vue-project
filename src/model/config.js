let config = {
  api:'http://a.itying.com/',
  getByKey(key='roomid'){
    let value = localStorage.getItem(key);
    if(value){
      return JSON.parse(value);
    }
  },
  setValue(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  },
  removeByKey(key){
    localStorage.removeItem(key);
  }
};

export  default config;
