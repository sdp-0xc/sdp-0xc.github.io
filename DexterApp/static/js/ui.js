// buttons
const connect = document.getElementById('connect');
const disconnectTab = document.getElementById('disconnectTab');
const retrunBtn = document.getElementById('returnBtn');
const manualControlBtn = document.getElementById('manualControlButton');
const manualControlTab = document.getElementById('manualControlTab');
const photoTab = document.getElementById('photoTab');
const tableTab = document.getElementById('tableTab');
const photoBtn = document.getElementById('photoBtn');
const upLeftBtn = document.getElementById('upLeft');
const upBtn = document.getElementById('up');
const upRightBtn = document.getElementById('upRight');
const leftBtn = document.getElementById('left');
const stopBtn = document.getElementById('stop');
const rightBtn = document.getElementById('right');
const downLeftBtn = document.getElementById('downLeft');
const downBtn = document.getElementById('down');
const downRightBtn = document.getElementById('downRight');
const eraseBtn = document.getElementById('eraseButton');
const eraseBtnBig = document.getElementById('eraseButtonBig');
const eraseCircle = document.getElementById('eraseCircle');
const stopCircle = document.getElementById('stopCircle');
const takePhoto = document.getElementById('takePhoto');
const emailInput = document.getElementById('emailInput');
const sendBtn = document.getElementById('sendBtn');
const tableBtn = document.getElementById('tableButton');
const drawTableBtn = document.getElementById('drawTableBtn');
const graphCircle = document.getElementById('graphCircle');
const stopGraphCircle = document.getElementById('stopCircleG');
const graphTab = document.getElementById('graphTab');
const graphBtn = document.getElementById('graphBtn');
let currentTab = 'menu';
const testing = true;

// Display available functionality when connection is established
connect.addEventListener('click', () => {
  const initialDisplay = document.getElementById('initialDisplay');
  const loading = document.getElementById('loading');

  // Adding d-none to classList hides element with its content
  initialDisplay.classList.add('d-none');

  // Removing d-none displays previously hidden element
  loading.classList.remove('d-none');

  setTimeout(() => {
    loading.classList.add('d-none');
    if (testing === true) {
      const correct = document.getElementById('correct');

      correct.classList.remove('d-none');
      setTimeout(() => {
        const manualControlBody = document.getElementById('manualControlBody');
        const mobileNav = document.getElementById('mobileNav');

        correct.classList.add('d-none');
        manualControlBody.classList.add('d-md-block');
        mobileNav.classList.remove('d-none');
        mobileNav.classList.add('d-md-none');
        retrunBtn.parentElement.classList.remove('d-none');
        retrunBtn.parentElement.classList.add('d-md-none');

        if (window.innerWidth >= 768) {
          const navigation = document.getElementById('navigation');
          navigation.classList.remove('d-none');
        } else {
          initialDisplay.parentElement.parentElement.classList.remove('d-flex');
          initialDisplay.parentElement.parentElement.classList.add('d-none');
        }
      }, 1000);
    } else {
      const incorrect = document.getElementById('incorrect');

      incorrect.classList.remove('d-none');
      setTimeout(() => {
        incorrect.classList.add('d-none');
        initialDisplay.classList.remove('d-none');
      }, 1000);
    }
  }, 2000);
});

disconnectTab.addEventListener('click', () => {
  $('#diconnectModal').modal('hide');

  const initialDisplay = document.getElementById('initialDisplay');
  const loading = document.getElementById('loading');
  const navigation = document.getElementById('navigation');
  const manualControlBody = document.getElementById('manualControlBody');
  const mobileNav = document.getElementById('mobileNav');
  const photoBody = document.getElementById('photoBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  mobileNav.classList.add('d-none');
  navigation.classList.add('d-none');
  manualControlBody.classList.remove('d-md-block');
  manualControlBody.classList.add('d-none');
  eraseBody.classList.remove('d-md-block');
  eraseBody.classList.add('d-none');
  photoBody.classList.add('d-none');
  retrunBtn.parentElement.classList.remove('d-md-none');
  retrunBtn.parentElement.classList.add('d-none');
  manualControlTab.classList.add('active');
  manualControlTab.classList.add('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  tableBody.classList.add('d-none');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'menu';

  if (window.innerWidth < 768) {
    initialDisplay.parentElement.parentElement.classList.remove('d-none');
    initialDisplay.parentElement.parentElement.classList.add('d-flex');
  }

  loading.classList.remove('d-none');

  // Return to initial screen
  setTimeout(() => {
    loading.classList.add('d-none');
    initialDisplay.classList.remove('d-none');
  }, 2000);

  // Return our program to initial state

  eraseBtnBig.classList.remove('active');
  eraseBtnBig.classList.remove('text-light');
  eraseCircle.classList.remove('d-none');
  stopCircle.classList.add('d-none');

  drawTableBtn.style = 'background-color: #0033dc;';
  drawTableBtn.classList.add('btn-primary');
  drawTableBtn.classList.remove('btn-danger');
  drawTableBtn.innerHTML = 'Draw';

  eraseCircle.classList.remove('d-none');
  stopCircle.classList.add('d-none');

  graphCircle.classList.remove('d-none');
  stopGraphCircle.classList.add('d-none');
  snapshot.src = '';
});

eraseBtnBig.addEventListener('click', () => {
  if (currentTab !== 'erase') {
    const manualControlBody = document.getElementById('manualControlBody');
    const photoBody = document.getElementById('photoBody');
    const tableBody = document.getElementById('tableBody');
    const graphBody = document.getElementById('graphBody');

    currentTab = 'erase';

    graphBody.classList.add('d-none');
    eraseBtnBig.classList.add('active');
    eraseBtnBig.classList.add('text-light');
    manualControlTab.classList.remove('active');
    manualControlTab.classList.remove('text-light');
    photoTab.classList.remove('active');
    photoTab.classList.remove('text-light');
    tableTab.classList.remove('active');
    tableTab.classList.remove('text-light');
    graphTab.classList.remove('active');
    graphTab.classList.remove('text-light');

    eraseBody.classList.remove('d-none');
    eraseBody.classList.add('d-md-block');
    manualControlBody.classList.add('d-none');
    manualControlBody.classList.remove('d-md-block');
    photoBody.classList.add('d-none');
    tableBody.classList.add('d-none');

    drawTableBtn.style = 'background-color: #0033dc;';
    drawTableBtn.classList.add('btn-primary');
    drawTableBtn.classList.remove('btn-danger');
    drawTableBtn.innerHTML = 'Draw';

    graphCircle.classList.remove('d-none');
    stopGraphCircle.classList.add('d-none');
  }
});

retrunBtn.addEventListener('click', () => {
  const initialDisplay = document.getElementById('initialDisplay');
  const manualControlBody = document.getElementById('manualControlBody');
  const mobileNav = document.getElementById('mobileNav');
  const photoBody = document.getElementById('photoBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  tableBody.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-flex');
  manualControlBody.classList.add('d-none');
  photoBody.classList.add('d-none');
  eraseBody.classList.add('d-none');
  mobileNav.classList.remove('d-none');
  manualControlTab.classList.add('active');
  manualControlTab.classList.add('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  retrunBtn.parentElement.classList.remove('mt-5');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  initialDisplay.parentElement.parentElement.setAttribute(
    'style',
    'padding-left: 25px; padding-right: 25px; overflow-y: auto; max-height: 475px;'
  );
  currentTab = 'menu';

  drawTableBtn.style = 'background-color: #0033dc;';
  drawTableBtn.classList.add('btn-primary');
  drawTableBtn.classList.remove('btn-danger');
  drawTableBtn.innerHTML = 'Draw';

  eraseCircle.classList.remove('d-none');
  stopCircle.classList.add('d-none');

  graphCircle.classList.remove('d-none');
  stopGraphCircle.classList.add('d-none');
});

manualControlBtn.addEventListener('click', () => {
  const initialDisplay = document.getElementById('initialDisplay');
  const manualControlBody = document.getElementById('manualControlBody');
  const mobileNav = document.getElementById('mobileNav');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  tableBody.classList.add('d-none');
  mobileNav.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  manualControlBody.classList.remove('d-none');
  manualControlTab.classList.add('active');
  manualControlTab.classList.add('text-light');
  eraseBtnBig.classList.remove('active');
  eraseBtnBig.classList.remove('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'manualControl';
});

manualControlTab.addEventListener('click', () => {
  const initialDisplay = document.getElementById('initialDisplay');
  const manualControlBody = document.getElementById('manualControlBody');
  const mobileNav = document.getElementById('mobileNav');
  const photoBody = document.getElementById('photoBody');
  const eraseBody = document.getElementById('eraseBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  tableBody.classList.add('d-none');
  mobileNav.classList.add('d-none');
  photoBody.classList.add('d-none');
  eraseBody.classList.add('d-none');
  eraseBody.classList.remove('d-md-block');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  manualControlBody.classList.remove('d-none');
  manualControlTab.classList.add('active');
  manualControlTab.classList.add('text-light');
  eraseBtnBig.classList.remove('active');
  eraseBtnBig.classList.remove('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'manualControl';

  // If user opens a seperate functionality while dexter is
  // cleaning the board, dexter should stop cleaning and
  // await further instructions (should discuss further
  // and most likely change this behaviour)
  eraseCircle.classList.remove('d-none');
  stopCircle.classList.add('d-none');

  drawTableBtn.style = 'background-color: #0033dc;';
  drawTableBtn.classList.add('btn-primary');
  drawTableBtn.classList.remove('btn-danger');
  drawTableBtn.innerHTML = 'Draw';

  graphCircle.classList.remove('d-none');
  stopGraphCircle.classList.add('d-none');
});

photoBtn.addEventListener('click', () => {
  const photoBody = document.getElementById('photoBody');
  const initialDisplay = document.getElementById('initialDisplay');
  const manualControlBody = document.getElementById('manualControlBody');
  const mobileNav = document.getElementById('mobileNav');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  tableBody.classList.add('d-none');
  mobileNav.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  manualControlBody.classList.add('d-none');
  photoBody.classList.remove('d-none');
  manualControlTab.classList.remove('active');
  manualControlTab.classList.remove('text-light');
  photoTab.classList.add('active');
  photoTab.classList.add('text-light');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  retrunBtn.parentElement.classList.add('mt-5');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'photo';
});

photoTab.addEventListener('click', () => {
  const photoBody = document.getElementById('photoBody');
  const initialDisplay = document.getElementById('initialDisplay');
  const manualControlBody = document.getElementById('manualControlBody');
  const mobileNav = document.getElementById('mobileNav');
  const eraseBody = document.getElementById('eraseBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  tableBody.classList.add('d-none');
  eraseBody.classList.add('d-none');
  eraseBody.classList.remove('d-md-block');
  eraseBtnBig.classList.remove('active');
  eraseBtnBig.classList.remove('text-light');
  mobileNav.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  manualControlBody.classList.add('d-none');
  manualControlBody.classList.remove('d-md-block');
  photoBody.classList.remove('d-none');
  manualControlTab.classList.remove('active');
  manualControlTab.classList.remove('text-light');
  photoTab.classList.add('active');
  photoTab.classList.add('text-light');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'photo';

  drawTableBtn.style = 'background-color: #0033dc;';
  drawTableBtn.classList.add('btn-primary');
  drawTableBtn.classList.remove('btn-danger');
  drawTableBtn.innerHTML = 'Draw';

  eraseCircle.classList.remove('d-none');
  stopCircle.classList.add('d-none');

  graphCircle.classList.remove('d-none');
  stopGraphCircle.classList.add('d-none');
});

tableTab.addEventListener('click', () => {
  const eraseBody = document.getElementById('eraseBody');
  const initialDisplay = document.getElementById('initialDisplay');
  const mobileNav = document.getElementById('mobileNav');
  const photoBody = document.getElementById('photoBody');
  const manualControlBody = document.getElementById('manualControlBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  mobileNav.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  tableBody.classList.remove('d-none');
  eraseBody.classList.add('d-none');
  eraseBody.classList.remove('d-md-block');
  manualControlBody.classList.add('d-none');
  manualControlBody.classList.remove('d-md-block');
  photoBody.classList.add('d-none');

  manualControlTab.classList.remove('active');
  manualControlTab.classList.remove('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  eraseBtnBig.classList.remove('active');
  eraseBtnBig.classList.remove('text-light');
  tableTab.classList.add('active');
  tableTab.classList.add('text-light');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'table';

  eraseCircle.classList.remove('d-none');
  stopCircle.classList.add('d-none');

  graphCircle.classList.remove('d-none');
  stopGraphCircle.classList.add('d-none');
});

graphTab.addEventListener('click', () => {
  const eraseBody = document.getElementById('eraseBody');
  const initialDisplay = document.getElementById('initialDisplay');
  const mobileNav = document.getElementById('mobileNav');
  const photoBody = document.getElementById('photoBody');
  const manualControlBody = document.getElementById('manualControlBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.remove('d-none');
  mobileNav.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  tableBody.classList.add('d-none');
  eraseBody.classList.add('d-none');
  eraseBody.classList.remove('d-md-block');
  manualControlBody.classList.add('d-none');
  manualControlBody.classList.remove('d-md-block');
  photoBody.classList.add('d-none');

  manualControlTab.classList.remove('active');
  manualControlTab.classList.remove('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  eraseBtnBig.classList.remove('active');
  eraseBtnBig.classList.remove('text-light');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  graphTab.classList.add('active');
  graphTab.classList.add('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'graph';

  drawTableBtn.style = 'background-color: #0033dc;';
  drawTableBtn.classList.add('btn-primary');
  drawTableBtn.classList.remove('btn-danger');
  drawTableBtn.innerHTML = 'Draw';

  eraseCircle.classList.remove('d-none');
  stopCircle.classList.add('d-none');
});

graphCircle.addEventListener('click', () => {
  graphCircle.classList.add('d-none');
  stopGraphCircle.classList.remove('d-none');
});

stopGraphCircle.addEventListener('click', () => {
  graphCircle.classList.remove('d-none');
  stopGraphCircle.classList.add('d-none');
});

tableBtn.addEventListener('click', () => {
  const eraseBody = document.getElementById('eraseBody');
  const initialDisplay = document.getElementById('initialDisplay');
  const mobileNav = document.getElementById('mobileNav');
  const photoBody = document.getElementById('photoBody');
  const manualControlBody = document.getElementById('manualControlBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  mobileNav.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  tableBody.classList.remove('d-none');
  eraseBody.classList.add('d-none');
  eraseBody.classList.remove('d-md-block');
  manualControlBody.classList.add('d-none');
  manualControlBody.classList.remove('d-md-block');
  photoBody.classList.add('d-none');

  manualControlTab.classList.remove('active');
  manualControlTab.classList.remove('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  eraseBtnBig.classList.remove('active');
  eraseBtnBig.classList.remove('text-light');
  tableTab.classList.add('active');
  tableTab.classList.add('text-light');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'table';
});

eraseBtn.addEventListener('click', () => {
  const eraseBody = document.getElementById('eraseBody');
  const initialDisplay = document.getElementById('initialDisplay');
  const mobileNav = document.getElementById('mobileNav');
  const photoBody = document.getElementById('photoBody');
  const manualControlBody = document.getElementById('manualControlBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.add('d-none');
  tableBody.classList.add('d-none');
  mobileNav.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  eraseBody.classList.remove('d-none');
  eraseBody.classList.add('d-md-block');
  manualControlBody.classList.add('d-none');
  photoBody.classList.add('d-none');
  manualControlTab.classList.remove('active');
  manualControlTab.classList.remove('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  eraseBtnBig.classList.add('active');
  eraseBtnBig.classList.add('text-light');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  graphTab.classList.remove('active');
  graphTab.classList.remove('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  currentTab = 'erase';
});

graphBtn.addEventListener('click', () => {
  const eraseBody = document.getElementById('eraseBody');
  const initialDisplay = document.getElementById('initialDisplay');
  const mobileNav = document.getElementById('mobileNav');
  const photoBody = document.getElementById('photoBody');
  const manualControlBody = document.getElementById('manualControlBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');

  graphBody.classList.remove('d-none');
  tableBody.classList.add('d-none');
  mobileNav.classList.add('d-none');
  initialDisplay.parentElement.parentElement.classList.remove('d-none');
  initialDisplay.parentElement.parentElement.classList.add('d-flex');
  eraseBody.classList.add('d-none');
  eraseBody.classList.remove('d-md-block');
  manualControlBody.classList.add('d-none');
  photoBody.classList.add('d-none');

  manualControlTab.classList.remove('active');
  manualControlTab.classList.remove('text-light');
  photoTab.classList.remove('active');
  photoTab.classList.remove('text-light');
  eraseBtnBig.classList.remove('active');
  eraseBtnBig.classList.remove('text-light');
  tableTab.classList.remove('active');
  tableTab.classList.remove('text-light');
  graphTab.classList.add('active');
  graphTab.classList.add('text-light');
  $('[data-toggle="tooltip"]').tooltip('hide');
  initialDisplay.parentElement.parentElement.setAttribute(
    'style',
    'padding-left: 10px; padding-right: 10px; overflow-y: auto; max-height: 475px;'
  );
  currentTab = 'graph';
});

window.addEventListener('resize', () => {
  const initialDisplay = document.getElementById('initialDisplay');
  const loading = document.getElementById('loading');
  const navigation = document.getElementById('navigation');
  const manualControlBody = document.getElementById('manualControlBody');
  const photoBody = document.getElementById('photoBody');
  const eraseBody = document.getElementById('eraseBody');
  const tableBody = document.getElementById('tableBody');
  const graphBody = document.getElementById('graphBody');
  const correct = document.getElementById('correct');
  const incorrect = document.getElementById('incorrect');

  $('[data-toggle="tooltip"]').tooltip('hide');
  if (
    window.innerWidth >= 768 &&
    initialDisplay.classList.contains('d-none') &&
    loading.classList.contains('d-none') &&
    incorrect.classList.contains('d-none') &&
    correct.classList.contains('d-none')
  ) {
    navigation.classList.remove('d-none');
    initialDisplay.parentElement.parentElement.classList.remove('d-none');
    initialDisplay.parentElement.parentElement.classList.add('d-flex');
    if (currentTab === 'menu' || currentTab === 'manualControl') {
      manualControlTab.classList.add('active');
      manualControlTab.classList.add('text-light');
      eraseBtnBig.classList.remove('active');
      eraseBtnBig.classList.remove('text-light');
      photoTab.classList.remove('active');
      photoTab.classList.remove('text-light');
      tableTab.classList.remove('active');
      tableTab.classList.remove('text-light');
      graphTab.classList.remove('active');
      graphTab.classList.remove('text-light');

      graphBody.classList.add('d-none');
      tableBody.classList.add('d-none');
      manualControlBody.classList.remove('d-none');
      manualControlBody.classList.add('d-md-block');
      photoBody.classList.add('d-none');
      eraseBody.classList.add('d-none');
      eraseBody.classList.remove('d-md-block');
    } else if (currentTab === 'photo') {
      photoTab.classList.add('active');
      photoTab.classList.add('text-light');
      manualControlTab.classList.remove('active');
      manualControlTab.classList.remove('text-light');
      eraseBtnBig.classList.remove('active');
      eraseBtnBig.classList.remove('text-light');
      tableTab.classList.remove('active');
      tableTab.classList.remove('text-light');
      graphTab.classList.remove('active');
      graphTab.classList.remove('text-light');

      graphBody.classList.add('d-none');
      tableBody.classList.add('d-none');
      manualControlBody.classList.add('d-none');
      manualControlBody.classList.remove('d-md-block');
      photoBody.classList.remove('d-none');
      eraseBody.classList.add('d-none');
      eraseBody.classList.remove('d-md-block');
      retrunBtn.parentElement.classList.remove('mt-5');
    } else if (currentTab === 'erase') {
      eraseBtnBig.classList.add('active');
      eraseBtnBig.classList.add('text-light');
      manualControlTab.classList.remove('active');
      manualControlTab.classList.remove('text-light');
      photoTab.classList.remove('active');
      photoTab.classList.remove('text-light');
      tableTab.classList.remove('active');
      tableTab.classList.remove('text-light');
      graphTab.classList.remove('active');
      graphTab.classList.remove('text-light');

      graphBody.classList.add('d-none');
      tableBody.classList.add('d-none');
      eraseBody.classList.remove('d-none');
      eraseBody.classList.add('d-md-block');
      manualControlBody.classList.add('d-none');
      manualControlBody.classList.remove('d-md-block');
      photoBody.classList.add('d-none');
    } else if (currentTab === 'table') {
      eraseBtnBig.classList.remove('active');
      eraseBtnBig.classList.remove('text-light');
      manualControlTab.classList.remove('active');
      manualControlTab.classList.remove('text-light');
      photoTab.classList.remove('active');
      photoTab.classList.remove('text-light');
      tableTab.classList.add('active');
      tableTab.classList.add('text-light');
      graphTab.classList.remove('active');
      graphTab.classList.remove('text-light');

      graphBody.classList.add('d-none');
      tableBody.classList.remove('d-none');
      eraseBody.classList.add('d-none');
      eraseBody.classList.remove('d-md-block');
      manualControlBody.classList.add('d-none');
      manualControlBody.classList.remove('d-md-block');
      photoBody.classList.add('d-none');
    } else if (currentTab === 'graph') {
      eraseBtnBig.classList.remove('active');
      eraseBtnBig.classList.remove('text-light');
      manualControlTab.classList.remove('active');
      manualControlTab.classList.remove('text-light');
      photoTab.classList.remove('active');
      photoTab.classList.remove('text-light');
      tableTab.classList.remove('active');
      tableTab.classList.remove('text-light');
      graphTab.classList.add('active');
      graphTab.classList.add('text-light');

      graphBody.classList.remove('d-none');
      tableBody.classList.add('d-none');
      eraseBody.classList.add('d-none');
      eraseBody.classList.remove('d-md-block');
      manualControlBody.classList.add('d-none');
      manualControlBody.classList.remove('d-md-block');
      photoBody.classList.add('d-none');
      initialDisplay.parentElement.parentElement.setAttribute(
        'style',
        'padding-left: 25px; padding-right: 25px; overflow-y: auto; max-height: 475px;'
      );
    }
  } else if (
    initialDisplay.classList.contains('d-none') &&
    loading.classList.contains('d-none') &&
    incorrect.classList.contains('d-none') &&
    correct.classList.contains('d-none')
  ) {
    navigation.classList.add('d-none');
    if (currentTab === 'menu') {
      mobileNav.classList.remove('d-none');
      initialDisplay.parentElement.parentElement.classList.remove('d-flex');
      initialDisplay.parentElement.parentElement.classList.add('d-none');
    } else if (currentTab === 'manualControl') {
      mobileNav.classList.add('d-none');
      initialDisplay.parentElement.parentElement.classList.remove('d-none');
      initialDisplay.parentElement.parentElement.classList.add('d-flex');
      manualControlBody.classList.remove('d-none');
      manualControlBody.classList.add('d-md-block');
      photoBody.classList.add('d-none');
      tableBody.classList.add('d-none');
      graphBody.classList.add('d-none');
    } else if (currentTab === 'photo') {
      mobileNav.classList.add('d-none');
      initialDisplay.parentElement.parentElement.classList.remove('d-none');
      initialDisplay.parentElement.parentElement.classList.add('d-flex');
      manualControlBody.classList.add('d-none');
      manualControlBody.classList.remove('d-md-block');
      photoBody.classList.remove('d-none');
      retrunBtn.parentElement.classList.add('mt-5');
      tableBody.classList.add('d-none');
      graphBody.classList.add('d-none');
    } else if (currentTab === 'erase') {
      mobileNav.classList.add('d-none');
      initialDisplay.parentElement.parentElement.classList.remove('d-none');
      initialDisplay.parentElement.parentElement.classList.add('d-flex');
      eraseBody.classList.remove('d-none');
      eraseBody.classList.add('d-md-block');
      photoBody.classList.add('d-none');
      manualControlBody.classList.add('d-none');
      manualControlBody.classList.remove('d-md-block');
      tableBody.classList.add('d-none');
      graphBody.classList.add('d-none');
    } else if (currentTab === 'table') {
      mobileNav.classList.add('d-none');
      initialDisplay.parentElement.parentElement.classList.remove('d-none');
      initialDisplay.parentElement.parentElement.classList.add('d-flex');
      eraseBody.classList.add('d-none');
      eraseBody.classList.remove('d-md-block');
      photoBody.classList.add('d-none');
      manualControlBody.classList.add('d-none');
      manualControlBody.classList.remove('d-md-block');
      tableBody.classList.remove('d-none');
      graphBody.classList.add('d-none');
    } else if (currentTab === 'graph') {
      mobileNav.classList.add('d-none');
      initialDisplay.parentElement.parentElement.classList.remove('d-none');
      initialDisplay.parentElement.parentElement.classList.add('d-flex');
      eraseBody.classList.add('d-none');
      eraseBody.classList.remove('d-md-block');
      photoBody.classList.add('d-none');
      manualControlBody.classList.add('d-none');
      manualControlBody.classList.remove('d-md-block');
      tableBody.classList.add('d-none');
      graphBody.classList.remove('d-none');
      initialDisplay.parentElement.parentElement.setAttribute(
        'style',
        'padding-left: 10px; padding-right: 10px; overflow-y: auto; max-height: 475px;'
      );
    }
  }
});

drawTableBtn.addEventListener('click', () => {
  if (drawTableBtn.innerHTML === 'Draw') {
    drawTableBtn.style = '';
    drawTableBtn.classList.remove('btn-primary');
    drawTableBtn.classList.add('btn-danger');
    drawTableBtn.innerHTML = 'Stop Drawing';
  } else {
    drawTableBtn.style = 'background-color: #0033dc;';
    drawTableBtn.classList.add('btn-primary');
    drawTableBtn.classList.remove('btn-danger');
    drawTableBtn.innerHTML = 'Draw';
  }
});

// Event Listeners for buttons in the erase section

$(document).ready(function() {
  const $valueSpan = $('.valueSpan2');
  const $value = $('#rowRange');
  $valueSpan.html('Rows: ' + $value.val());
  $value.on('input change', () => {
    $valueSpan.html('Rows: ' + $value.val());
  });
});

$(document).ready(function() {
  const $valueSpan1 = $('.valueSpan1');
  const $value = $('#columnRange');
  $valueSpan1.html('Columns: ' + $value.val());
  $value.on('input change', () => {
    $valueSpan1.html('Columns: ' + $value.val());
  });
});

eraseCircle.addEventListener('click', () => {
  eraseCircle.classList.add('d-none');
  stopCircle.classList.remove('d-none');
});

stopCircle.addEventListener('click', () => {
  eraseCircle.classList.remove('d-none');
  stopCircle.classList.add('d-none');
});

emailInput.addEventListener('input', () => {
  if (validateEmail(emailInput.value)) {
    sendBtn.classList.remove('disabled');
    sendBtn.classList.remove('btn-primary');
    emailInput.classList.remove('is-invalid');
    sendBtn.classList.add('btn-outline-primary');
    emailInput.classList.add('is-valid');
  } else {
    sendBtn.classList.add('disabled');
    sendBtn.classList.remove('btn-outline-primary');
    emailInput.classList.remove('is-valid');
    sendBtn.classList.add('btn-primary');
    emailInput.classList.add('is-invalid');
  }
});

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    return false;
  }
}

takePhoto.addEventListener('click', () => {
  snapshot.src = './DexterApp/static/img/raw_image.jpg';
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
