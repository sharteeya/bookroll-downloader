const waitTime = 1;  // Wait ? second(s) before download next page.

const bookLink = new URL(window.location.href);
const bookId = bookLink.search.split('?contents=')[1];
const pageNumber = parseInt(document.getElementById('pageNumberText').innerText.split('/')[1], 10);
const imagePageProto = `/contents/unzipped/${bookId}/OPS/images/out_`;

async function download(){
    for(let i = 1 ; i <= pageNumber ; i++){
        let link = document.createElement('a');
        link.download = i;
        link.href = `${imagePageProto}${i}.jpg`;
        link.click();
        await new Promise(resolve => setTimeout(resolve, waitTime*1000));
    }
}

console.log(`%cDownloading slides. (${pageNumber} pages)`, 'background: #3d3d3d; color: white; font-size: 24px');
download();