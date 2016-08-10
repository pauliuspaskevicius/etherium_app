var items  = [];

$(document).ready(function(){
  $.ajax('data.json').done(function(data){
    console.log(data);
    renderList (data);
  });
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
  items[0] = null;
  console.log($(this).parent().remove());
  console.log(items);
}
