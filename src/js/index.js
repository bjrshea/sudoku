import '../scss/styles.scss';
import { CreateSudoku } from './backend-logic.js';
import $ from 'jquery';

// Frontend Logic
$(document).ready(function() {

  CreateSudoku();
  
});
