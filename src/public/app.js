window.onload = () => {
    //function

    const refresh = () => {
        location.reload();
    }

    const reloadButton = document.createElement("button");
    reloadButton.append("Reload!");
    reloadButton.addEventListener("click", () => {
        refresh();
    });


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

    






    const postMaker = () => {
        const inputMaker = document.getElementById("inputMaker").value;
        const inputDetail = document.getElementById("inputDetail").value;
        console.log("inputMaker", inputMaker);
        console.log("inputDetail", inputDetail);

        const mypostEl = document.createElement('div');

        //postを書く
   
        let postData = {};
        postData.MakerName = inputMaker;
        postData.Detail = inputDetail;
        
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // レスポンスの表示
                alert(this.responseText);
            }
        }

        xmlHttpRequest.open('POST', 'http://localhost:3000/makers');

        // サーバに対して解析方法を指定する
        xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/json');

        // データをリクエスト ボディに含めて送信する
        console.log("postData",postData);
        console.log("postData2",JSON.stringify(postData));
        xmlHttpRequest.send( JSON.stringify(postData));
    }

    const postMakerButton = document.createElement("button");
    postMakerButton.append("MakerAdd!");
    postMakerButton.addEventListener("click", () => {
        postMaker();
    });


    //myspace1
    const containerEl = document.querySelector('#myspace1');

    const friendEl = document.createElement('div');
    friendEl.className = 'friend';
    friendEl.innerText = " test!!"

    const postEl = document.createElement('div');
    postEl.innerText = "  innertest! ";
    postEl.append(friendEl);
    postEl.append(reloadButton);
    containerEl.append(postEl);


    //myspace2

    const containerEl2 = document.querySelector('#myspace2');
    containerEl2.append(getMakerButton);

    //postspace
    const postContainer = document.querySelector('#postspace');
    postContainer.append(postMakerButton);

    //myspace3

    const containerEl3 = document.querySelector('#myspace3');
    const postEl3 = document.createElement('div');
    postEl3.innerText = " display ";

    containerEl3.append(postEl3);



};