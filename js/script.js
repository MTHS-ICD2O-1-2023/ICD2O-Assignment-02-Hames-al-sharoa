// Copyright (c) 2024 hames al sharoa All rights reserved
//
// Created by: hames alsharoa
// Created on: feb 2024
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the perimeter of a square.
 */
function calculateClicked() {
  // input
  const side = parseInt(document.getElementById("side-length").value)

  // process
  const perimeter = side * 4

  // output
  document.getElementById("perimeter").innerHTML =
    "<p>Perimeter = " + perimeter + " cm."
}