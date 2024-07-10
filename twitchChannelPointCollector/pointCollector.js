function collectChannelPoints(intervalInMilliseconds){
  setInterval(() => {
    const button = document.querySelector("#live-page-chat > div > div > div.Layout-sc-1xcs6mc-0.iTiPMO.chat-shell.chat-shell__expanded > div > div > section > div > seventv-container > div > div:nth-child(2) > div.Layout-sc-1xcs6mc-0.eWfUfi.chat-input__buttons-container > div.Layout-sc-1xcs6mc-0.cNKHwD > div > div > div > div.Layout-sc-1xcs6mc-0.kxrhnx > div > div > div > button")
    if(button) {
      button.click()
    }
  }, intervalInMilliseconds)
}

collectChannelPoints(5000);