import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import React from "react";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

const videos = document.getElementsByTagName("video");
for (let i = 0; i < videos.length; i++) {
    videos[i].controls = false;
    videos[i].loop = true;
    videos[i].muted = false;

    videos[i].autoplay = true;
    videos[i].playsInline = true;
    videos[i].defaultPlaybackRate = 1;
    videos[i].playbackRate = 1;
    videos[i].volume = 1;
}

for (let i = 0; i < document.getElementsByTagName("iframe").length; i++) {
    const myIframe: HTMLIFrameElement = document.getElementsByTagName("iframe")[i];
    myIframe.style.maxWidth = "100%";
}
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.style.maxWidth = "100%";
    image.style.padding = "0";
    image.style.margin = "auto";
    image.classList.add("img-thumbnail");
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const lists = document.getElementsByTagName("ul");

for (let i = 0; i < lists.length; i++) {
    lists[i].style.listStyleType = "none";
    lists[i].classList.add("list-group");
    lists[i].classList.add("list-unstyled");
}

const sections = document.querySelectorAll("section");

for (const section of sections) {
    section.classList.add("p-2 m-0");
}
