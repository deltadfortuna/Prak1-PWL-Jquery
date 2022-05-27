$(document).ready(() => {
	var n = 1
	$("#btn-add").hide()
	$("#product-" + n).change(function () {
		$("#btn-add").show()
	})

	let order = ""
	$("#btn-order").click(function () {
		if ($("#nama-pembeli").val() == "") {
			alert("Name Required")
		} else {
			$("#nama-pembeli-show").html($("#nama-pembeli").val())
			for (let i = 5; i <= n; i++) {
				let idx = stock.findIndex(
					(element) => element.itemName === $("#product-" + i).val()
				)
				if ($("#amount-" + i).val() <= stock[idx].amount) {
					stock[idx].amount -= $("#amount-" + i).val()
					order +=
						"<li>" +
						$("#product-" + i).val() +
						" (" +
						$("#amount-" + i).val() +
						")</li>"
					$("#list-product").html(`${order}`)
				} else {}
			}
		}
	})

	$("#btn-add").click(function () {
		let idx = stock.findIndex(
			(element) => element.itemName === $("#product-" + n).val()
		)
		n += 1

		let order = `
		<div class="product-card">
			<div class="select-product" id="id-${n}">
			<br>
			<select id="product-${n}" required>
				<option value="" hidden selected>Pilih produk</option>
		`
		function removeItem(array, item) {
			for (var i in array) {
				if (array[i] == item) {
					array.splice(i, 1)
					break
				}
			}
		}
		removeItem(products, stock[idx].itemName)

		products.forEach((element) => {
			order += `<option value="${element}">${element}</option>`
		})

		order += `
			</select>
			<br>
			</div>
			<div class="field-amount">
				<br>
				<input type="nber" id="amount-${n}" class="amount" required>
				<br>
			</div>
		`
		order += `
			<div id='button-delete' class="del">
				<button id="btn-delete-${n}" class="btn-danger">
					<div class='box'>x</div>
				</button>
			</div>
		</div>
		`
		$(this).before(order)

		if (products.length == 1)
		{
			$("#btn-add").hide()
		}

		$("#btn-delete-" + n).click(function () {
			$("#id-" + n).nextAll()
			$(this).parent().parent().remove()
			$("#id-" + n).closest("div")
			$(this).parent().parent().remove()
			$("#btn-add").show()
		})
	})
	let stock = [
		{   itemName: "Jet Tempur",
			amount: 10,
		},
		{	itemName: "Nuklir Hiroshima",
			amount: 10,
		},
		{	itemName: "Infinity Stone",
			amount: 10,
		},
		{	itemName: "Burj Khalifa",
			amount: 10,
		},
		{	itemName: "Rudal Hipersonik",
			amount: 10,
		},
	]
	let products = [
		"Jet Tempur",
		"Nuklir Hiroshima",
		"Infinity Stone",
		"Burj Khalifa",
		"Rudal Hipersonik",
	]
})