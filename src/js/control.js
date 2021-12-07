import Flow from './flow';

export default class Control {
  constructor(host) {
    this.host = host;
    this.flow = new Flow(host.querySelector('[data-flow=picture]'));
    this.link = this.host.querySelector('input');
    this.error = this.host.querySelector('[data-error=URL]');
    this.linkFiles = null;
  }

  createBox(linkFiles) {
    this.error.style.visibility = 'hidden';
    const img = document.createElement('img');
    img.src = linkFiles;
    img.addEventListener('error', () => {
      this.showError();
    });
    img.addEventListener('load', () => {
      this.clearInput();
      this.flow.addFlow(img);
    });
  }

  showError() {
    this.error.style.visibility = 'visible';
  }

  start() {
    this.link.addEventListener('input', () => {
      this.evenAdd();
    });
  }

  evenAdd() {
    this.previewFile.bind(this)();
  }

  // eslint-disable-next-line class-methods-use-this
  previewFile() {
    const reader = new FileReader();
    reader.readAsDataURL(this.link.files[0]);
    reader.onloadend = () => {
      const img = document.createElement('img');
      img.src = reader.result;
      this.flow.addFlow(img);
    };
  }

  // async getFile() {
  //   try {
  //     const fileImg = await this.readFile(this.link.files[0]);
  //     const img1 = new Blob([fileImg], { type: 'image/*' });
  //     console.log(img1);
  //     const img = document.createElement('img');
  //     img.src = img1;
  //     img.addEventListener('error', () => {
  //       this.showError();
  //     });
  //     img.addEventListener('load', () => {
  //       const htmlText = '<div class="delete"></div>';
  //       const div = document.createElement('div');
  //       div.classList = 'picture';
  //       div.innerHTML = htmlText;
  //       div.append(img);
  //       this.host.append(div);
  //       this.host.scrollLeft = this.host.scrollWidth;
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // eslint-disable-next-line class-methods-use-this
  readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('load', (evt) => {
        resolve(evt.target.result);
      });
      reader.addEventListener('error', (evt) => {
        reject(evt.target.error);
      });
      reader.onerror = reject;

      reader.readAsArrayBuffer(file);
    });
  }

  clearInput() {
    [...this.link].forEach((e) => {
      e.value = '';
    });
  }
}
