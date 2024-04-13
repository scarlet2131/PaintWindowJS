// Name: Monisha Ranjan
// Student Id : C0914148 
document.addEventListener('DOMContentLoaded', function () {
      const canvas = document.getElementById('main');
      const contentWindow = canvas.getContext('2d');
      let isPainting = false;
      let brushSize = 10;
      let currentColor = 'blue';

      // Beginning the paint
      function paint(event) {
        if (!isPainting) return;
        contentWindow.lineWidth = brushSize;
        contentWindow.lineCap = 'round';
        contentWindow.strokeStyle = currentColor;
        contentWindow.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contentWindow.stroke();
        contentWindow.beginPath();
        contentWindow.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      }

      // Initializing the paint event when mouse down
      function startToPaint(event) {
        isPainting = true;
        paint(event);
      }

      // Stopping the paint event when mouse up
      function stopPaint() {
        isPainting = false;
        contentWindow.beginPath();
      }

      // Adding EventListeners
      canvas.addEventListener('mousedown', startToPaint);
      canvas.addEventListener('mouseup', stopPaint);
      canvas.addEventListener('mousemove', paint);

      // Changing color basedd on which element selected
      function changeColor(newColor) {
        currentColor = newColor;
      }

      //Mapping change color event to the elements in html
      document.getElementById('black').addEventListener('click', () => changeColor('black'));
      document.getElementById('red').addEventListener('click', () => changeColor('red'));
      document.getElementById('blue').addEventListener('click', () => changeColor('blue'));
      document.getElementById('yellow').addEventListener('click', () => changeColor('yellow'));
      //Making erase color white to override the paintings
      document.getElementById('erase').addEventListener('click', () => changeColor('white'));
      //Clearing canvas
      document.getElementById('new').addEventListener('click', function () {
        contentWindow.clearRect(0, 0, canvas.width, canvas.height);
      });

      //Brush size udpate functional
      document.getElementById('slider').addEventListener('input', function () {
        brushSize = this.value;
        document.getElementById('brushSize').textContent = brushSize;
      });
    });