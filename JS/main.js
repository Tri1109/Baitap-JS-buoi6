//-------------------------- Bài 1--------------------------
function timSoNguyenDuongN() {
    var sum = 0;
    var n = 1;
    while (sum <= 10000) {
      sum += n;
      n++;
    }
    return n - 1;
  }
  
  function handleSmallestNum() {
  var soNguyenDuongNNhoNhat = timSoNguyenDuongN();
  document.getElementById("result1").innerHTML = `Số nguyên dương nhỏ nhất n sao cho tổng từ 1 đến n lớn hơn 10000 là: ${soNguyenDuongNNhoNhat}`;
}

//-------------------------- Bài 2--------------------------
function tinhTong(x, n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (x < 1) {
            sum = `Vui lòng nhập giá trị X lớn hơn 0`;
        } else {
            sum += Math.pow(x, i);
        }
    }
    return sum;
  }
  
  function handleSmallestNum2() {
    const x = document.getElementById("numbX").value;
  const n = document.getElementById("numbN").value;
    var tong = tinhTong(x, n);
    document.getElementById("result2").innerHTML = `Tổng của dãy số S(${n}) = ${tong}`;
  }

  //------------------------- Bài 3--------------------------
  function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      var giaiThua = 1;
      for (var i = 2; i <= n; i++) {
        giaiThua *= i;
      }
      return giaiThua;
    }
  }

  function handleSmallestNum3() {
   var n = parseInt(document.getElementById("numbN2").value);
   var giaiThua = tinhGiaiThua(n);

   document.getElementById("result3").innerHTML = `Giai thừa của ${n} là: ${giaiThua}`;
  }
  
  //------------------------- Bài 4--------------------------
  function creatDiv() {
    var result = document.getElementById("result4");
    result.innerHTML = ""; 
  
    for (var i = 1; i <= 10; i++) {
      var div = document.createElement("div");
      div.textContent = `Đây là Div ${i}`;
      if (i % 2 === 0) {
        div.style.backgroundColor = "red";
      } else {
        div.style.backgroundColor = "blue";
      }
      result.appendChild(div);
    }
  }

  //------------------------- Bài 5--------------------------
  function xacDinhSoNguyenTo(num) {
    // Kiểm tra xem số có nhỏ hơn 2 hay không, nếu có thì không phải là số nguyên tố
    if (num < 2) {
        return false;
    }
    // Kiểm tra từ 2 đến căn bậc hai của số đó, nếu chia hết cho bất kỳ số nào trong khoảng đó thì không phải là số nguyên tố
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    // Nếu không chia hết cho bất kỳ số nào trong khoảng từ 2 đến căn bậc hai của số đó, thì đó là số nguyên tố
    return true;
}

function timSoNguyenTo() {
    var num = +document.getElementById("numb5").value;
    var result5 = document.getElementById("result5");
    result5.innerHTML = "";

    for (let i = 1; i <= num; i++) {
        if (xacDinhSoNguyenTo(i)) {
            result5.innerHTML += i + " ";
        }
}
}
