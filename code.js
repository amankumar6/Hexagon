$(document).ready(function () {
  let row = "",
    hexagon = "",
    totalRow = Math.ceil(screen.height * (10 / 785)),
    totalHexagon = Math.ceil(screen.width * (8 / 766));

  for (let i = 0; i < totalHexagon; i++)
    hexagon += '<div class="hexagon"></div>';

  for (let i = 0; i < totalRow; i++) row += `<div class="row">${hexagon}</div>`;
  
  $(".container").append(row);
});
