var items  = [
  { 'id': 1, 'name': 'Rob', 'balance': 1001.4943 },
  { 'id': 2, 'name': 'Felipe', 'balance': 100.01 },
  { 'id': 3, 'name': 'Graziano', 'balance': 99.99 },
  { 'id': 4, 'name': 'David', 'balance': 59.334 },
  { 'id': 5, 'name': 'Paulius', 'balance': 0 }
];

$(document).ready(function(){
  renderList (items);
});

function renderList (list) {
  $('#app-container').html('');
  for (var i=0; i<list.length; i++){

    var item = $('<div><span class="name"></span><button>x</button> <span class="balance"></span></div>');

    var name = $(item).find('.name').html(list[i].name);
    var balance = $(item).find('.balance').html(list[i].balance.toFixed(3)).css('float', 'right').css('padding-right', '5px');
    var button = $(item).find('button').attr('data-id', list[i].id).css('float', 'right');
    button.on('click', deleteItem);



    $('#app-container').append(item);
  }
}

function deleteItem () {
  console.log($(this).attr('data-id'));
  console.log($(this).parent().remove());
}
