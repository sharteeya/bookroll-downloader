const bookLink = new URL(window.location.href);
const bookId = bookLink.search.split('?contents=')[1];
const pageNumber = parseInt(document.getElementById('pageNumberText').innerHTML.split('/')[1], 10);
const imagePageProto = `/contents/unzipped/${bookId}/OPS/images/out_`;

async function download(){
	for(let i = 1 ; i <= pageNumber ; i++){
		let link = document.createElement('a');
		link.download = i;
        link.href = `${imagePageProto}${i}.jpg`;
		link.click();
		await new Promise(resolve => setTimeout(resolve, 1000));
	}
}

console.log(`Downloading slide (${pageNumber} page)`);
download();