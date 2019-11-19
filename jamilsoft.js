/* Jamilsoft.js 1.0 Jan 2020 by Muhammad Jamil 
Name      :    Jamilsoft.js
Description:   Javascript Library
Author    :    Muhammad Jamil
website   :    www.jamilsoft.com.ng
email     :    myakububauchi@gmail.com





*/



"use strict";
var browser = {Name:navigator.appName, Version:navigator.appVersion, Language:function (){ if (document.all){return navigator.browserLanguage}else{return navigator.language}}}
var js_15th = 0;var js_16th = 0;js_1st3=24;var js_17th = '';var js_18th = new Array('0@','1#','2$','3%','4^','5&','6*','7 = ','8-','9+','Aa','Bb','Cc','Dd','Ee','Ff','Gg','Hh','Ii','Jj','Kk','Ll','Mm','Nn','Oo','Pp','Qq','Rr','Ss','Tt','Uu','Vv','Ww','Xx','Yy','Zz');js_2st3=js_1st3+6; third3=js_1st3+js_2st3; fourth3=js_1st3+js_2st3+third3; js_5th3=fourth3/third3*js_1st3; js_6th3=third3*js_1st3/12*js_2st3; js_7th3=js_1st3+js_2st3/js_5th3-16*fourth3; 
eighth3=js_6th3*(js_1st3-5)/third3+fourth3; ninth3=eighth3/js_7th3+js_1st3*third3-fourth3;
tenth3=(ninth3+js_1st3/third3*fourth3+js_2st3*js_5th3)/js_6th3+eighth3-ninth3-1;eleventh3=Math.floor(tenth3);js_12th3=eleventh3-24;function Js_encrypter(js_20th, js_1st2, js_2st2) {
js_16th = js_20th.length - 1;third2 = 0;fourth2 = 0 ;js_5th2 = '';js_6th2 = '';js_15th3 = '';js_16th3(js_20th, js_1st2, js_16th, js_2st2);}function js_17th3(js_18th3) {for (Js_encrypter3 = 0; Js_encrypter3 < js_12th3; Js_encrypter3++) {if ((js_18th[Js_encrypter3].substring(0,1) == js_18th3) || (js_18th[Js_encrypter3].substring(1,2) == js_18th3)) {if (js_18th[Js_encrypter3].substring(0,1) == js_18th3) {js_20th3 = 0;}if (js_18th[Js_encrypter3].substring(1,2) == js_18th3) {js_20th3 = 1;}return Js_encrypter3;      }   }}function js_1st4(js_18th3) {js_2st4 = 'no';for (Js_encrypter3 = 0; Js_encrypter3 < js_12th3; Js_encrypter3++) {
if ((js_18th[Js_encrypter3].substring(0,1) == js_18th3) || (js_18th[Js_encrypter3].substring(1,2) == js_18th3)) {js_2st4 = 'yes';   }}if (js_2st4 == 'yes') {return true;}else {return false;   }}function js_17th4(third4) {if (third4 > 35) {return (third4 - js_12th3);}else {return third4;   }}function js_16th3(fourth4,js_5th4,ninth4,tenth4) {if (js_1st4(js_5th4.charAt(third2))) {if (js_1st4(fourth4.charAt(fourth2))) {if (tenth4 == 0) { thirteenth4 = js_17th3(fourth4.charAt(fourth2));}if (tenth4 == 1) { thirteenth4 = js_12th3 - js_17th3(fourth4.charAt(fourth2));   }}else {thirteenth4 = 0;}fourteenth4 = js_17th3(js_5th4.charAt(third2));js_6th2 = js_6th2+js_18th[js_17th4(fourteenth4+thirteenth4)].charAt(js_20th3);}else {js_6th2 = js_6th2+js_5th4.charAt(third2);}js_5th2 = js_5th4.substring(third2+1,js_5th4.length+1);js_15th3 = js_6th2+js_5th2;document.encodeForm.encoder.value = js_15th3;third2++;
if (fourth2 == ninth4) {fourth2 = 0;}else {fourth2++;}if (third2 == (js_5th4.length)) {window.clearTimeout(js_15th);return false;}js_18th4 = fourth4;js_7th4 = js_5th4;js_6th4 = ninth4;eighth4 = tenth4;js_15th = window.setTimeout('js_16th3(js_18th4, js_7th4, js_6th4, eighth4)', 0);}

var Js = {};
Js.hide = function (sel) {
  Js.hideElements(Js.getElements(sel));
};
Js.hideElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    Js.hideElement(elements[i]);
  }
};
Js.hideElement = function (element) {
  Js.styleElement(element, "display", "none");
};
Js.show = function (sel, a) {
  var elements = Js.getElements(sel);
  if (a) {Js.hideElements(elements);}
  Js.showElements(elements);
};
Js.showElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    Js.showElement(elements[i]);
  }
};
Js.showElement = function (element) {
  Js.styleElement(element, "display", "block");
};
Js.addStyle = function (sel, prop, val) {
  Js.styleElements(Js.getElements(sel), prop, val);
};
Js.styleElements = function (elements, prop, val) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    Js.styleElement(elements[i], prop, val);
  }
};
Js.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
Js.toggleShow = function (sel) {
  var i, x = Js.getElements(sel), l = x.length;
  for (i = 0; i < l; i++) {    
    if (x[i].style.display == "none") {
      Js.styleElement(x[i], "display", "block");
    } else {
      Js.styleElement(x[i], "display", "none");
    }
  }
};
Js.addClass = function (sel, name) {
  Js.addClassElements(Js.getElements(sel), name);
};
Js.addClassElements = function (elements, name) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    Js.addClassElement(elements[i], name);
  }
};
Js.addClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
};
Js.removeClass = function (sel, name) {
  Js.removeClassElements(Js.getElements(sel), name);
};
Js.removeClassElements = function (elements, name) {
  var i, l = elements.length, arr1, arr2, j;
  for (i = 0; i < l; i++) {
    Js.removeClassElement(elements[i], name);
  }
};
Js.removeClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
};
Js.toggleClass = function (sel, c1, c2) {
  Js.toggleClassElements(Js.getElements(sel), c1, c2);
};
Js.toggleClassElements = function (elements, c1, c2) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    Js.toggleClassElement(elements[i], c1, c2);
  }
};
Js.toggleClassElement = function (element, c1, c2) {
  var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
  t1 = (c1 || "");
  t2 = (c2 || "");
  t1Arr = t1.split(" ");
  t2Arr = t2.split(" ");
  arr = element.className.split(" ");
  if (t2Arr.length == 0) {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
    }
    if (allPresent) {
      Js.removeClassElement(element, t1);
    } else {
      Js.addClassElement(element, t1);
    }
  } else {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
    }
    if (allPresent) {
      Js.removeClassElement(element, t1);
      Js.addClassElement(element, t2);          
    } else {
      Js.removeClassElement(element, t2);        
      Js.addClassElement(element, t1);
    }
  }
};
Js.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};
Js.filterHTML = function(id, sel, filter) {
  var a, b, c, i, ii, iii, hit;
  a = Js.getElements(id);
  for (i = 0; i < a.length; i++) {
    b = a[i].querySelectorAll(sel);
    for (ii = 0; ii < b.length; ii++) {
      hit = 0;
      if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        hit = 1;
      }
      c = b[ii].getElementsByTagName("*");
      for (iii = 0; iii < c.length; iii++) {
        if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          hit = 1;
        }
      }
      if (hit == 1) {
        b[ii].style.display = "";
      } else {
        b[ii].style.display = "none";
      }
    }
  }
};
Js.sortHTML = function(id, sel, sortvalue) {
  var a, b, i, ii, y, bytt, v1, v2, cc, j;
  a = Js.getElements(id);
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < 2; j++) {
      cc = 0;
      y = 1;
      while (y == 1) {
        y = 0;
        b = a[i].querySelectorAll(sel);
        for (ii = 0; ii < (b.length - 1); ii++) {
          bytt = 0;
          if (sortvalue) {
            v1 = b[ii].querySelector(sortvalue).innerText;
            v2 = b[ii + 1].querySelector(sortvalue).innerText;
          } else {
            v1 = b[ii].innerText;
            v2 = b[ii + 1].innerText;
          }
          v1 = v1.toLowerCase();
          v2 = v2.toLowerCase();
          if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
            bytt = 1;
            break;
          }
        }
        if (bytt == 1) {
          b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
          y = 1;
          cc++;
        }
      }
      if (cc > 0) {break;}
    }
  }
};
Js.slideshow = function (sel, ms, func) {
  var i, ss, x = Js.getElements(sel), l = x.length;
  ss = {};
  ss.current = 1;
  ss.x = x;
  ss.ondisplaychange = func;
  if (!isNaN(ms) || ms == 0) {
    ss.milliseconds = ms;
  } else {
    ss.milliseconds = 1000;
  }
  ss.start = function() {
    ss.display(ss.current)
    if (ss.ondisplaychange) {ss.ondisplaychange();}
    if (ss.milliseconds > 0) {
      window.clearTimeout(ss.timeout);
      ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
    }
  };
  ss.next = function() {
    ss.current += 1;
    if (ss.current > ss.x.length) {ss.current = 1;}
    ss.start();
  };
  ss.previous = function() {
    ss.current -= 1;
    if (ss.current < 1) {ss.current = ss.x.length;}
    ss.start();
  };
  ss.display = function (n) {
    Js.styleElements(ss.x, "display", "none");
    Js.styleElement(ss.x[n - 1], "display", "block");
  }
  ss.start();
  return ss;
};
Js.includeHTML = function(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("Js-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("Js-include-html");
          Js.includeHTML(cb);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};
Js.getHttpData = function (file, func) {
  Js.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(this.responseText);
    }
  });
};
Js.getHttpObject = function (file, func) {
  Js.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(JSON.parse(this.responseText));
    }
  });
};
Js.displayHttp = function (id, file) {
  Js.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      Js.displayObject(id, JSON.parse(this.responseText));
    }
  });
};
Js.http = function (target, readyfunc, xml, method) {
  var httpObj;
  if (!method) {method = "GET"; }
  if (window.XMLHttpRequest) {
    httpObj = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    httpObj = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (httpObj) {
    if (readyfunc) {httpObj.onreadystatechange = readyfunc;}
    httpObj.open(method, target, true);
    httpObj.send(xml);
  }
};
Js.getElementsByAttribute = function (x, att) {
  var arr = [], arrCount = -1, i, l, y = x.getElementsByTagName("*"), z = att.toUpperCase();
  l = y.length;
  for (i = -1; i < l; i += 1) {
    if (i == -1) {y[i] = x;}
    if (y[i].getAttribute(z) !== null) {arrCount += 1; arr[arrCount] = y[i];}
  }
  return arr;
};  
Js.dataObject = {},
Js.displayObject = function (id, data) {
  var htmlObj, htmlTemplate, html, arr = [], a, l, rowClone, x, j, i, ii, cc, repeat, repeatObj, repeatX = "";
  htmlObj = document.getElementById(id);
  htmlTemplate = init_template(id, htmlObj);
  html = htmlTemplate.cloneNode(true);
  arr = Js.getElementsByAttribute(html, "Js-repeat");
  l = arr.length;
  for (j = (l - 1); j >= 0; j -= 1) {
    cc = arr[j].getAttribute("Js-repeat").split(" ");
    if (cc.length == 1) {
      repeat = cc[0];
    } else {
      repeatX = cc[0];
      repeat = cc[2];
    }
    arr[j].removeAttribute("Js-repeat");
    repeatObj = data[repeat];
    if (repeatObj && typeof repeatObj == "object" && repeatObj.length != "undefined") {
      i = 0;
      for (x in repeatObj) {
        i += 1;
        rowClone = arr[j];
        rowClone = Js_replace_curly(rowClone, "element", repeatX, repeatObj[x]);
        a = rowClone.attributes;
        for (ii = 0; ii < a.length; ii += 1) {
          a[ii].value = Js_replace_curly(a[ii], "attribute", repeatX, repeatObj[x]).value;
        }
        (i === repeatObj.length) ? arr[j].parentNode.replaceChild(rowClone, arr[j]) : arr[j].parentNode.insertBefore(rowClone, arr[j]);
      }
    } else {
      console.log("Js-repeat must be an array. " + repeat + " is not an array.");
      continue;
    }
  }
  html = Js_replace_curly(html, "element");
  htmlObj.parentNode.replaceChild(html, htmlObj);
  function init_template(id, obj) {
    var template;
    template = obj.cloneNode(true);
    if (Js.dataObject.hasOwnProperty(id)) {return Js.dataObject[id];}
    Js.dataObject[id] = template;
    return template;
  }
  function Js_replace_curly(elmnt, typ, repeatX, x) {
    var value, rowClone, pos1, pos2, originalHTML, lookFor, lookForARR = [], i, cc, r;
    rowClone = elmnt.cloneNode(true);
    pos1 = 0;
    while (pos1 > -1) {
      originalHTML = (typ == "attribute") ? rowClone.value : rowClone.innerHTML;
      pos1 = originalHTML.indexOf("{{", pos1);
      if (pos1 === -1) {break;}
      pos2 = originalHTML.indexOf("}}", pos1 + 1);
      lookFor = originalHTML.substring(pos1 + 2, pos2);
      lookForARR = lookFor.split("||");
      value = undefined;
      for (i = 0; i < lookForARR.length; i += 1) {
        lookForARR[i] = lookForARR[i].replace(/^\s+|\s+$/gm, ''); //trim
        if (x) {value = x[lookForARR[i]];}
        if (value == undefined && data) {value = data[lookForARR[i]];}
        if (value == undefined) {
          cc = lookForARR[i].split(".");
          if (cc[0] == repeatX) {value = x[cc[1]]; }
        }
        if (value == undefined) {
          if (lookForARR[i] == repeatX) {value = x;}
        }
        if (value == undefined) {
          if (lookForARR[i].substr(0, 1) == '"') {
            value = lookForARR[i].replace(/"/g, "");
          } else if (lookForARR[i].substr(0,1) == "'") {
            value = lookForARR[i].replace(/'/g, "");
          }
        }
        if (value != undefined) {break;}
      }
      if (value != undefined) {
        r = "{{" + lookFor + "}}";
        if (typ == "attribute") {
          rowClone.value = rowClone.value.replace(r, value);
        } else {
          Js_replace_html(rowClone, r, value);
        }
      }
      pos1 = pos1 + 1;
    }
    return rowClone;
  }
  function Js_replace_html(a, r, result) {
    var b, l, i, a, x, j;
    if (a.hasAttributes()) {
      b = a.attributes;
      l = b.length;
      for (i = 0; i < l; i += 1) {
        if (b[i].value.indexOf(r) > -1) {b[i].value = b[i].value.replace(r, result);}
      }
    }
    x = a.getElementsByTagName("*");
    l = x.length;
    a.innerHTML = a.innerHTML.replace(r, result);
  }
};
