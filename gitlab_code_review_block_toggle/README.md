# Gitlab Code Review Block Toggle

Create a new bookmark and paste this as the link.

```js
javascript:(function()%7B%24(%27.diff-file%27).each(function(index,element)%7Bvar id%3D%27toggle-%27%2Bindex%3Belement.id%3Did%3Bvar js%3D"%24(%27%23"%2Bid%2B" .diff-content%27).toggle()%3B"%3Bvar button%3D%27<button onClick%3D"%27%2Bjs%2B%27">Toggle Visibility</button>%27%3B%24(element).prepend(button)%3B%7D)%3B%24(%27.diff-file .diff-header span:first-child:not(.commit-short-id)%27).each(function(index,element)%7Bvar text%3D%24(element).text()%3Bif(text.substr(text.length-3)%3D%3D%27yml%27)%7B%24(element).parent().next().addClass(%27cassette-toggle%27)%3B%7D%7D)%3Bvar cassetteControl%3D"%24(%27.cassette-toggle%27).toggle()"%3Bvar control%3D"%24(%27.diff-content%27)"%3Bvar styles%3D%27position: fixed%3B left: 10px%3B z-index: 1000%3B%27%3Bvar cassetteButton%3D%27<button style%3D"%27%2Bstyles%2B%27top: 10px%3B%27%2B%27" onClick%3D"%27%2BcassetteControl%2B%27">Toggle Cassettes (yml)</button>%27%3Bvar showButton%3D%27<button style%3D"%27%2Bstyles%2B%27top: 35px%3B%27%2B%27" onClick%3D"%27%2Bcontrol%2B%27.show()%27%2B%27">Show All</button>%27%3Bvar hideButton%3D%27<button style%3D"%27%2Bstyles%2B%27top: 60px%3B%27%2B%27" onClick%3D"%27%2Bcontrol%2B%27.hide()%27%2B%27">Hide All</button>%27%3B%24(%27body%27).append(cassetteButton,showButton,hideButton)%3B%7D)()%3B
```

![image 1](./gif.gif)
