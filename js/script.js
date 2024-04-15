// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    
    const area = length * width;
    
    document.getElementById('result').innerHTML = "The area of the rectangle is: " + area;
}