(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){let log=console.log;const mydate=new Date;const year=mydate.getFullYear();const month=mydate.getMonth();const day=mydate.getDay();const date=mydate.getDate();const hours=mydate.getHours();const minutes=mydate.getMinutes();const seconds=mydate.getSeconds();const cacheMenit=`${year}${month}${date}${hours}${minutes}`;const cacheJam=`${year}${month}${date}${hours}`;const cacheHari=`${year}${month}${date}`;const cacheBulan=`${year}${month}`;let isOnline;isOnline=true;let assets=`./assets`;let init="";if(isOnline){assets=`https://eriiksanjaya.github.io/assets`;init="/7"}let tagLinkApp=document.createElement("link");var link=document.createElement("link");link.href=`${assets}${init}/app.css?v=${cacheBulan}`;link.type="text/css";link.rel="stylesheet";document.getElementsByTagName("head")[0].appendChild(link);let tagJq=document.createElement("script");let tagAppJs=document.createElement("script");const firstScript=document.getElementById("firstScript");tagAppJs.onload=function(){};tagAppJs.src=`${assets}${init}/app.min.js?v=${cacheBulan}`;firstScript.parentNode.insertBefore(tagAppJs,firstScript)},{}]},{},[1]);