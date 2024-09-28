function searchAirdrop() {
      var input, filter, results, cells, p, i, txtValue;
      input = document.getElementById('searchInput');
      filter = input.value.toUpperCase();
      results = document.getElementById("searchResults");
      cells = results.getElementsByClassName('cell');
      
      for (i = 0; i < cells.length; i++) {
        p = cells[i].getElementsByTagName("h5")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          cells[i].style.display = "";
        } else {
          cells[i].style.display = "none";
        }
      }
    }
