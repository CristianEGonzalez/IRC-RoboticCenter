$(document).ready(function() {
  $('.table').on('click', '.btn-danger', function() {
    var row = $(this).closest('tr');
    var rowData = row.find('td').map(function() {
      return $(this).html();
    }).get();
    
    var newRow = $('<tr><td colspan="6" style="color: red;">Class canceled</td><td><button class="btn btn-success active-btn">Reschedule class</button></td></tr>');
    
    newRow.on('click', '.active-btn', function() {
      var restoredRow = $('<tr></tr>');
      $.each(rowData, function(index, value) {
        restoredRow.append('<td>' + value + '</td>');
      });
      
      newRow.replaceWith(restoredRow);
    });
    
    row.replaceWith(newRow);
  });
});