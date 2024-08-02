function calculateTotal() {
    var theoryValue = parseInt(document.getElementById('theory').value) || 0;
    var practicalValue = parseInt(document.getElementById('practical').value) || 0;

    var total = theoryValue + practicalValue;
    document.getElementById('total').textContent = total;
  }
  document.getElementById('theory').addEventListener('input', calculateTotal);
  document.getElementById('practical').addEventListener('input', calculateTotal);

  function calculateTotal1() {
    var theoryValue = parseInt(document.getElementById('theory1').value) || 0;
    var practicalValue = parseInt(document.getElementById('practical1').value) || 0;

    var total = theoryValue + practicalValue;
    document.getElementById('total1').textContent = total;
  }
  document.getElementById('theory1').addEventListener('input', calculateTotal1);
  document.getElementById('practical1').addEventListener('input', calculateTotal1);

  function calculateTotal2() {
    var theoryValue = parseInt(document.getElementById('theory2').value) || 0;
    var practicalValue = parseInt(document.getElementById('practical2').value) || 0;

    var total = theoryValue + practicalValue;
    document.getElementById('total2').textContent = total;
  }
  document.getElementById('theory2').addEventListener('input', calculateTotal2);
  document.getElementById('practical2').addEventListener('input', calculateTotal2);

  function calculateTotal3() {
    var theoryValue = parseInt(document.getElementById('theory3').value) || 0;
    var practicalValue = parseInt(document.getElementById('practical3').value) || 0;

    var total = theoryValue + practicalValue;
    document.getElementById('total3').textContent = total;
  }
  document.getElementById('theory3').addEventListener('input', calculateTotal3);
  document.getElementById('practical3').addEventListener('input', calculateTotal3);

  function calculateTotal4() {
    var theoryValue = parseInt(document.getElementById('theory4').value) || 0;
    var practicalValue = parseInt(document.getElementById('practical4').value) || 0;

    var total = theoryValue + practicalValue;
    document.getElementById('total4').textContent = total;
  }
  document.getElementById('theory4').addEventListener('input', calculateTotal4);
  document.getElementById('practical4').addEventListener('input', calculateTotal4);