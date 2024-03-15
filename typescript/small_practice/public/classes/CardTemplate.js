export class CardTemplate {
    render_html(person) {
        let img = './assets/images/male.png';
        if (person.gender === 'female') {
            img = './assets/images/female.png';
        }
        let cardHtml = `
            <div class="col-sm">
                <div class="card border-secondary mb-3" style="max-width: 18rem;">
                    <div class="card-header text-center">
                        <h5 class="card-title">${person.name} ${person.lastname}</h5>
                    </div>
                    <div class="card-body text-secondary">
                        <div class="text-center">
                            <img src="${img}" class="card-img-top img-thumbnail center rounded-circle" />
                        </div>
                        <hr />
                        <h5 class="card-title text-center"><i class="fa fa-black-tie"></i>&nbsp;${person.job}</h5>
                        <p class="card-text border-bottom">${person.details}</p>
                    </div>
                    <div class="card-text container">
                        <p class="card-text"><i class="fa fa-envelope"></i>&nbsp; ${person.email}</p>
                        <p class="card-text"><i class="fa fa-phone"></i>&nbsp; ${person.phone}</p>
                    </div>

                    <div class="card-footer">
                        <div class="float-right btn-group btn-group-sm" style="color: white;">
                            <a class="btn btn-primary tooltips" type="button id="edit"><i class="fa fa-pencil"></i> Edit</a>
                            <a class="btn btn-danger tooltips" type="button" id="delete"><i class="fa fa-times"></i> Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('output').insertAdjacentHTML('afterbegin', cardHtml);
    }
    render(person) {
        let img_src = './assets/images/male.png';
        if (person.gender === 'female') {
            img_src = './assets/images/female.png';
        }
        const col = document.createElement('div');
        col.classList.add('col-sm');
        const card = document.createElement('div');
        card.classList.add('card', 'border-secondary', 'mb-3');
        card.setAttribute('style', 'max-width: 18rem;');
        const card_header = document.createElement('div');
        card_header.classList.add('card-header', 'text-center');
        const card_header_text = document.createElement('h5');
        card_header_text.classList.add('card-title');
        card_header_text.textContent = person.name + " " + person.lastname;
        card_header.appendChild(card_header_text);
        card.appendChild(card_header);
        const card_body = document.createElement('div');
        card_body.classList.add('card-body', 'text-secondary');
        const card_body_img = document.createElement('div');
        card_body_img.classList.add('text-center');
        const img = document.createElement('img');
        img.classList.add('card-img-top', 'img-thumbnail', 'center', 'rounded-circle');
        img.src = img_src;
        card_body_img.appendChild(img);
        card_body.appendChild(card_body_img);
        const hr = document.createElement('hr');
        card_body.appendChild(hr);
        const card_body_title = document.createElement('h5');
        card_body_title.classList.add('card-title', 'text-center');
        const tie_symbol = document.createElement('i');
        tie_symbol.classList.add('fa', 'fa-black-tie');
        card_body_title.appendChild(tie_symbol);
        card_body_title.textContent = " " + person.job;
        const card_body_text = document.createElement('p');
        card_body_text.classList.add('card-text', 'border-bottom');
        card_body_text.textContent = person.details;
        card_body.appendChild(card_body_title);
        card_body.appendChild(card_body_text);
        card.appendChild(card_body);
        const card_text = document.createElement('div');
        card_text.classList.add('card-text', 'container');
        const email = document.createElement('p');
        email.classList.add('card-text');
        email.textContent = person.email;
        const phone = document.createElement('p');
        phone.classList.add('card-text');
        phone.textContent = person.phone;
        card_text.appendChild(email);
        card_text.appendChild(phone);
        card.appendChild(card_text);
        const card_footer = document.createElement('div');
        card_footer.classList.add('card-footer');
        const buttons_div = document.createElement('div');
        buttons_div.classList.add('float-right', 'btn-group', 'btn-group-sm');
        buttons_div.setAttribute('style', 'color: white;');
        const edit_button = document.createElement('a');
        edit_button.classList.add('btn', 'btn-primary', 'tooltips');
        edit_button.setAttribute('type', 'button');
        edit_button.textContent = 'Edit';
        const delete_button = document.createElement('a');
        delete_button.classList.add('btn', 'btn-danger', 'tooltips');
        delete_button.setAttribute('type', 'button');
        delete_button.textContent = 'Delete';
        buttons_div.appendChild(edit_button);
        buttons_div.appendChild(delete_button);
        card_footer.appendChild(buttons_div);
        card.appendChild(card_footer);
        col.appendChild(card);
        document.getElementById('output')?.appendChild(col);
    }
}
