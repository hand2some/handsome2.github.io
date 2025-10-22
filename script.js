// script.js
function loadDiaries() {
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    const list = document.getElementById("diary-list");
    list.innerHTML = "";
    diaries.forEach((d, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${d.title} (${d.date})</h3>
                         <p>${d.content}</p>
                         <button onclick="deleteDiary(${index})">删除</button>`;
        list.appendChild(div);
    });
}

function addDiary() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    if (!title || !content) return alert("标题和内容不能为空");
    
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    diaries.push({
        title,
        content,
        date: new Date().toLocaleString()
    });
    localStorage.setItem("diaries", JSON.stringify(diaries));
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    loadDiaries();
}

function deleteDiary(index) {
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    diaries.splice(index, 1);
    localStorage.setItem("diaries", JSON.stringify(diaries));
    loadDiaries();
}

// 页面加载时显示日记
loadDiaries();
