anime({
  targets: 'div.box',
  translateY: [{ value: 600, duration: 3000 }, { value: 0, duration: 2000 }],
  rotate: {
    value: '20turn',
  },
});

setTimeout(function() {
  window.location.href = '../craps.html';
}, 5000);
