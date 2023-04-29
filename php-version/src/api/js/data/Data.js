class Data
{
  constructor(url, data)
  {
    this.url = url;
    this.data = data;
  }

  sendToPhpAsJSON(_callback)
  {
    let xmlhttp = new XMLHttpRequest();

    let post = JSON.stringify(this.data);

    xmlhttp.open('POST', this.url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/JSON');
    xmlhttp.send(post);

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        _callback();
      }
    };
  }

  async sendToPhpAsForm()
  {
    try {
      const formData = new FormData();

      for (let key in this.data) {
        formData.append(key, this.data[key]);
      }

      await fetch(this.url, {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  getFromPhp()
  {
    const url = this.url;

    return new Promise(function (resolve, reject) {
      let xmlhttp = new XMLHttpRequest();

      xmlhttp.open("GET", url, true);

      xmlhttp.onload = () => {
        if (xmlhttp.status >= 200 && xmlhttp.status < 400)
        {
          resolve(xmlhttp.responseText);
        } else {
          reject({
            status: xmlhttp.status,
            statusText: xmlhttp.statusText
          });
        }
      };
      xmlhttp.onerror = () => {
        reject({
          status: this.status,
          statusText: xmlhttp.statusText
        });
      };

      xmlhttp.send();
    });
  }
}
