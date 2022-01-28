// 1.

function loopDePares (number) {
  for (let i = 0; i<101; i++) {
    if ((i + number) % 2 === 0) {
      console.log("El número " + i + " es par.");
    } else {
     console.log(i);
   };
 };
};
loopDePares (1);

// 2.

function loopDeImpares (number, word) {
  for (let i = 0; i<101; i++) {
    if ((i + number) % 2 !== 0) {
      console.log(i + word);
    } else {
     console.log(i);
   };
 };
};
loopDeImpares (2, "hola!");

// 3.

function sumattion (number) {
  // return (number * (number +1)) / 2;
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  };
return sum;
};
console.log(sumattion (3));

//4.

// function mulX5 (n) {
//   return n * 5;
// };

function callback (number, cb) {
  return cb(number);
};

// 5.

function nuevoArreglo (numero) {
  let newArray = [];
  for (let i=1; i <= numero; i++) {
    newArray.push(i)
  };
  return newArray;
};

// 6.

function split(str) {
  let arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
  };
  return arr;
};

// 7.

function middleCharacter (str) {
  if (str.length % 2 === 0) {
    return str[str.length / 2 -1] + str[str.length / 2]
  } else {
    return str[Math.floor(str.length / 2)]
  }
}

// 8.

function moveZeros (arr) {
  let newArray = [];
  for (var n of arr) {
    if (n !== 0) {
      newArray.push(n);
    }
  }

  for (var n of arr) {
    if (n === 0) {
      newArray.push(n);
    }
  }
  return newArray;
}

// 9.

function arrayHandler (arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    console.log("Soy " + arr1[i] + " y soy " + arr2[i]);
  }
}

// 10.

function mezclarArreglos (arr1, arr2) {
  let newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
    newArray.push(arr2[i]);
  }
  return newArray;
}

// 11.1 join

function join (arr) {
  let str = "";
  arr.forEach((item) => {
    str += item;
  });
  return str;
}

// 11.2 pop

function pop (arr) {
  return arr[arr.length-1];
}

// 11.3 filter

function cb_filter (x) {
  return x % 2 === 0;
}

function filter (arr, cb_filter) {
  let newArray = [];
  arr.forEach((item) => {
    if (cb_filter(item)) {
      newArray.push(item);
    };
  });
  return newArray;
}

// 11.4 map

function map (arr, cb_filter) {
  newArray = [];
  arr.forEach((item) => {
    newArray.push(cb_filter(item))
  });
  return newArray;
}

// 12.

function minSum (arr) {
  arr.sort((a, b) => a-b);
  return arr[0] + arr[1];
}

// 13.

function arregloDeObjetos (number) {
  newArray = [];
  for (var i = 0; i < number ; i++) {
    newArray.push({"valor": 1 + i});
  }
  return newArray;
}

// 14.

function arregloDeObjetos (number, word) {
  newArray = [];
  for (var i = 0; i < number ; i++) {
    newArray.push({[word]: 1 + i});
  }
  return newArray;
}

// 15.

function oneProperty (arr, str) {
  newArray = [];
  arr.forEach((item) => {
    newArray.push({[str]: item[str]});
  });
  return newArray;
}

// 16.

function warWords (str1, str2) {
  strA1 = str1.split("")
  strA2 = str2.split("")
  let value1 = 0;
  let value2 = 0;
  let abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26};

  for (var property in abc) {
    strA1.forEach((item) => {
      if (item === property) {
        value1 += abc[property];
      }
    });
  }

  for (var property in abc) {
    strA2.forEach((item) => {
      if (item === property) {
        value2 += abc[property];
      }
    });
  }

  if (value1 > value2) {
    return value1 + " => " + str1;
  }
  return value2 + " => " + str2;
}

// 17.

var prefijos = [54, 55, 56, 57, 58];
var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"];

function validarPrefijo (str) {
  function pre_pais (prefijos, paises) {
    let guia = {};
    for (let i = 0; i < prefijos.length; i++) {
      guia[prefijos[i]] = paises[i];
    }
    return guia;
  }
  let guia = pre_pais (prefijos, paises);

  if (guia[str[0] + str[1]]) {
    return "Este número pertenece a " + guia[str[0] + str[1]];
  }
  return "El número no pertenece a nuestros países";
}

// 18.

var prueba = { nombre: "santi", edad: 22, nacionalidad: "de otro planeta", documento: 44444444};

function reverseKeys (obj) {
  if (typeof obj === "object") {
    let newObj = {};
    for (var variable in obj) {
      if (typeof obj[variable] === "string") {
        newObj[obj[variable]] = variable;
      } else {
        newObj[variable] = obj[variable];
      }
    }
    return newObj;
  }
  return "error, input can’t be an " + typeof obj;
}

// 19.

function palindromo (str) {
  let str1 = str.toLocaleLowerCase()
  let str2 = str1.split("").reverse().join("");
  if (str1 == str2) {
    return "true palindromo " + str;
  }
  return "false palindromo " +str;
}

// 20.

var arr = [1, 2, 3, 4, 5];
var num = 2;

function rotar (arr, num) {
  newArray = [];
  for (var i = 0; i < num; i++) {
    newArray.push(arr[arr.length -num +i]);
  }
  for (var i = 0; i < arr.length -num; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

// 21.

var str1 = "AAABBB";
var str2 = "ABABABAB";

function consecutivosSimilares (str) {
  let consecutivos = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i+1] === str[i]) {
      consecutivos += 1;
    }
  }
  return consecutivos;
}
