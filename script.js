function updateTime() {
      var currentTime = new Date().toLocaleString();
      var timeText = document.querySelector("#timeElement");
      timeText.innerHTML = currentTime
      }
      setInterval(updateTime, 1000);

      dragElement(document.getElementById("welcome-window"));

      function dragElement(element) {

  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreen = document.querySelector("#welcome-window")
 
  function closeWindow(element) {
    element.style.display = "none"
  }

 var welcomeScreenClose = document.querySelector("#welcomeClose")

 var welcomeScreenOpen = document.querySelector("#welcomeOpen")

 welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
 });

 welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
 });

var selectedIcon = undefined;

function selectIcon(element) {
    element.classList.add("selected-desktop-App1");
    selectedIcon = element;
}

function deselectIcon(element) {
    element.classList.remove("selected-desktop-App1");
    selectedIcon = undefined;
}

function handleIconTap(element) {
  if (element.classList.contains("selected-desktop-App1")) {
    deselectIcon(element);
    openWindow(notesScreen);
  } else {
    if (selectedIcon) {
        deselectIcon(selectedIcon);
    }
    selectIcon(element);
  }
}

// İkonu JavaScript ile bulup tıklama olayını bağlıyoruz:
var desktopApp1 = document.querySelector("#desktop-App");

desktopApp1.addEventListener("click", function(e) {
    // Sayfanın başka bir yerinden tıklama kabarcıklanmasını engellemek için
    e.stopPropagation(); 
    handleIconTap(desktopApp1);
});

// Masaüstünde boş bir yere tıklandığında seçimi kaldırmak için:
document.addEventListener("click", function() {
    if (selectedIcon) {
        deselectIcon(selectedIcon);
    }
});

dragElement(document.querySelector("#desktop-App"));

var notesScreen = document.querySelector("#Notes-App")

var notesScreenClose = document.querySelector("#NotesClose")

notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));

 var biggestIndex = 15;
 function addWindowTapHandling(element) {
  element.addEventListener("mousedown",  () =>
  handleWindowTap(element)
 )
  }

  addWindowTapHandling(notesScreen)
  addWindowTapHandling(welcomeScreen)

 function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
 }

 function openWindow(element) {
  element.style.display = "flex";
  element.style.flexDirection = "column";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
 }
