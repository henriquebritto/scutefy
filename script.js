const form = document.querySelector('form');

const replaceColors = () => {
    const colors = document.querySelectorAll('div.L9xhJOJnV2OL5Chm3Jew');
    const colorsletra = document.querySelectorAll('div.A3ohAQNHsDIMv2EM3Ytp');
    /* COR DOS TEXTOS DA LETRA
    const lyricsColorActiveElements = document.querySelectorAll('--lyrics-color-active');

    for (let i = 0; i < lyricsColorActiveElements.length; i++) {
      lyricsColorActiveElements[i].style.color = 'red';
    }*/

    for (let i = 0; i < colors.length; i++) {
      colors[i].style.background = '#343434';
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({
        target:{ tabId: tab.id },
        function: replaceColors,

    });

});