var SakiProgress = {
    isLoaded: false,
    progres: false,
    pgDiv: false,
    textSpan: false,
    first: false,
    init: function (color) {
        if (!this.isLoaded) {
            this.isLoaded = true;
            console.info("SakiProgress Initializing!\nVersion:1.0.0\nQinlili Tech:Github@qinlili23333");
            this.pgDiv = document.createElement("div");
            this.pgDiv.id = "pgdiv";
            this.pgDiv.style = "z-index:9999;position:fixed;background-color:white;min-height:32px;width:auto;height:32px;left:0px;right:0px;top:0px;box-shadow:0px 2px 2px 1px rgba(0, 0, 0, 0.5);transition:opacity 0.5s;display:none;";
            this.pgDiv.style.opacity = 0;
            this.first = document.body.firstElementChild;
            document.body.insertBefore(this.pgDiv, this.first);
            this.first.style.transition = "margin-top 0.5s"
            this.progress = document.createElement("div");
            this.progress.id = "dlprogress"
            this.progress.style = "position: absolute;top: 0;bottom: 0;left: 0;background-color: #F17C67;z-index: -1;width:0%;transition: width 1s ease-in-out,opacity 0.25s;"
            if (color) {
                this.progress.style.backgroundColor = color;
            }
            this.pgDiv.appendChild(this.progress);
            this.textSpan = document.createElement("span");
            this.textSpan.style = "height:32px;padding:4px;font-size:24px;";
            this.pgDiv.appendChild(this.textSpan);
        } else {
            console.error("Multi Instance Error-SakiProgress Already Loaded!");
        }
    },
    setPercent: function (percent) {
        if (this.progress) {
            this.progress.style.width = percent + "%";
        } else {
            console.error("Not Initialized Error-Please Call `init` First!");
        }
    },
    clearProgress: function () {
        if (this.progress) {
            this.progress.style.opacity = 0;
            setTimeout(function () { SakiProgress.progress.style.width = "0%"; }, 500);
            setTimeout(function () { SakiProgress.progress.style.opacity = 1; }, 1500);
        } else {
            console.error("Not Initialized Error-Please Call `init` First!")
        }
    },
    hideDiv: function () {
        if (this.pgDiv) {
            this.pgDiv.style.opacity = 0;
            this.first.style.marginTop = "";
            setTimeout(function () {
                SakiProgress.pgDiv.style.display = "none";
            }, 500);
        }
        else {
            console.error("Not Initialized Error-Please Call `init` First!");
        }
    },
    showDiv: function () {
        if (this.pgDiv) {
            this.pgDiv.style.display = "";
            setTimeout(function () { SakiProgress.pgDiv.style.opacity = 1;},10);
            this.first.style.marginTop = (this.pgDiv.clientHeight + 10) + "px";
        }
        else {
            console.error("Not Initialized Error-Please Call `init` First!");
        }
    },
    setText: function (text) {
        if (this.textSpan) {
            this.textSpan.innerText = text;
        }
        else {
            console.error("Not Initialized Error-Please Call `init` First!");
        }
    }
}
