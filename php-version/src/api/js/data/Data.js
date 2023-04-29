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

  sendToPhpAsForm(_callback)
  {
    let xmlhttp = new XMLHttpRequest();
    let formData = new FormData();

    for (let i = 0; i < this.data.length; i++) {
      formData.append(this.data[i][0], this.data[i][1]);
    }

    xmlhttp.open('POST', this.url, true);
    xmlhttp.send(formData);

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        _callback();
      }
    };
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
