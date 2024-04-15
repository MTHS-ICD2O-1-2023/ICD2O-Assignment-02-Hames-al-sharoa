// Copyright (c) 2024 hames.al-sharoa All rights reserved
//
// Created by: hames.al-sharoa
// Created on: apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateRectangleArea() {
  // Get the values of length and width from input fields
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  // Check if the inputs are valid numbers
  if (isNaN(length) || isNaN(width)) {
    document.getElementById('area').innerHTML = 'Please enter valid numbers for length and width.';
    return;
  }
  // Calculate the area of the rectangle
  const area = length * width;
  // Display the result
  document.getElementById('area').innerHTML = `Area of the rectangle: ${area} square units.`;
}