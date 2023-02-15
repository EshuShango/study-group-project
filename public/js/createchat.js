const createStuGrpBtn = document.getElementById('create-btn');
const saveBtn = document.getElementById('saveGroup-btn');


$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});