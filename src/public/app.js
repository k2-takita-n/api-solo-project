window.onload = () => {
    //function

    const refresh = () => {
        location.reload();
    }

    const reloadButton = document.createElement("button");
    reloadButton.append("Cosole Clear!");
    reloadButton.addEventListener("click", () => {
        refresh();
    });


    // Get Maker

    const getMakerButton = document.createElement("button");
    getMakerButton.append("Get Maker!");
    getMakerButton.addEventListener("click", async () => {
        getMaker();
    });

    const getMaker = () => {
        const xmlHttpRequest = new XMLHttpRequest();

        xmlHttpRequest.open('GET', 'http://localhost:3000/makers', true);
        xmlHttpRequest.send();

        xmlHttpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                input_message = this.responseText;
                console.log(input_message);

                const mypostEl = document.createElement('div');
                mypostEl.innerText = input_message;
                postEl3.append(mypostEl);
            }
        };
    }



    // Get Ski
    const getSkiButton = document.createElement("button");
    getSkiButton.append("Get Ski!");
    getSkiButton.addEventListener("click", async () => {
        getSki();
    });

    const getSki = () => {
        const xmlHttpRequest = new XMLHttpRequest();

        xmlHttpRequest.open('GET', 'http://localhost:3000/skis', true);
        xmlHttpRequest.send();

        xmlHttpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                input_message = this.responseText;
                console.log(input_message);

                const mypostEl = document.createElement('div');
                mypostEl.innerText = input_message;
                postEl3.append(mypostEl);
            }
        };
    }





    //PostMaker

    const postMaker = () => {
        const inputMaker = document.getElementById("inputMaker").value;
        const inputMakerDetail = document.getElementById("inputMakerDetail").value;
        console.log("inputMaker", inputMaker);
        console.log("inputDetail", inputMakerDetail);

        const mypostEl = document.createElement('div');

        //postを書く

        let postData = {};
        postData.MakerName = inputMaker;
        postData.Detail = inputMakerDetail;

        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // レスポンスの表示
                alert(this.responseText);
            }
        }

        xmlHttpRequest.open('POST', 'http://localhost:3000/makers');

        // サーバに対して解析方法を指定する
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');

        // データをリクエスト ボディに含めて送信する
        console.log("postData", postData);
        console.log("postData2", JSON.stringify(postData));
        xmlHttpRequest.send(JSON.stringify(postData));
    }

    const postMakerButton = document.createElement("button");
    postMakerButton.append("MakerAdd!");
    postMakerButton.addEventListener("click", () => {
        postMaker();
    });



    //PostSki


    const postSki = () => {
        const inputSki = document.getElementById("inputSki").value;
        const inputSkiDetail = document.getElementById("inputSkiDetail").value;
        const inputSkiMaker = document.getElementById("inputSkiMaker").value;
      
        console.log("inputSki", inputSki);
        console.log("inputSkiDetail", inputSkiDetail);
        console.log("inputSkiMaker",inputSkiMaker);


        //postを書く

        let postData = {};
        postData.Name = inputSki;
        postData.Detail = inputSkiDetail;
        postData.makerId = parseInt(inputSkiMaker);

        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // レスポンスの表示
                alert(this.responseText);
            }
        }

        xmlHttpRequest.open('POST', 'http://localhost:3000/skis');

        // サーバに対して解析方法を指定する
        xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/json');

        // データをリクエスト ボディに含めて送信する
        console.log("postData2",JSON.stringify(postData));
        xmlHttpRequest.send( JSON.stringify(postData));
    }

    const postSkiButton = document.createElement("button");
    postSkiButton.append("SkiAdd!");
    postSkiButton.addEventListener("click", () => {
        postSki();
    });



    //myspace1
    const containerEl = document.querySelector('#myspace1');

    const middleEl = document.createElement('div');

    const postEl = document.createElement('div');
    //postEl.innerText = "  innertest! ";
    postEl.append(middleEl);
    postEl.append(reloadButton);
    containerEl.append(postEl);


    //myspace2

    //const containerEl2 = document.querySelector('#myspace2');
    middleEl.append(getMakerButton);
    middleEl.append(getSkiButton);

    // //Makerpostspace
    // const postContainer = document.querySelector('#Makerpostspace');
    // postContainer.append(postMakerButton);

    //Skipostspace
    const postContainer2 = document.querySelector('#Skipostspace');
    postContainer2.append(postSkiButton);

    //myspace3

    const containerEl3 = document.querySelector('#myspace3');
    const postEl3 = document.createElement('div');
    //postEl3.innerText = " display ";

    containerEl3.append(postEl3);



};