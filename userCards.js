const template = document.createElement('template')

template.innerHTML = `
	<style>
		*,
		*::before,
		*::after {
			margin: 0;
			padding: 0;
		}

		.user-card {
			padding: 16px;
			border: 1px solid #efefef;
			border-radius: 4px;
		}

		.user-card__avatarWrapper {
			width: 100%;	
			height: 200px;
			margin-bottom: 8px;
		}

		.user-card__avatar {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.user-card__info__title {
			margin-bottom: 6px;
		}

		.user-card__info__address {
			margin-bottom: 12px;
		}

		.user-card__info__address__email,
		.user-card__info__address__phone {
			font-size: 12px;
		}

		.user-card__info__address__email {
			margin-bottom: 6px;
		}

		.user-card__button {
			padding: 8px;
			border: none;
			border-radius: 4px;
			font-weight: 600;
			cursor: pointer;
		}
	</style>

	<div class="user-card">
		<div class="user-card__avatarWrapper">
			<img class="user-card__avatar" />
		</div>

		<div class="user-card__info">
			<h3 class="user-card__info__title"></h3>

			<div class="user-card__info__address">
				<p class="user-card__info__address__email"><slot name="email" /></p>
				<p class="user-card__info__address__phone"><slot name="phone" /></p>
			</div>

			<button class="user-card__button" id="toggle-address">Hide Address</button>
		</div>
	</div>
`

class UserCard extends HTMLElement {
	constructor() {
		super()

		this.showAddress = true

		this.attachShadow({ mode: 'open' })

		this.shadowRoot.appendChild(template.content.cloneNode(true))

		this.shadowRoot.querySelector('.user-card__info__title').innerText = this.getAttribute('fullName')
		this.shadowRoot.querySelector('.user-card__avatar').src = this.getAttribute('avatar')
	}

	toggleAddress() {
		this.showAddress = !this.showAddress

		const address = this.shadowRoot.querySelector('.user-card__info__address')
		const toggleButton = this.shadowRoot.querySelector('#toggle-address')

		if (this.showAddress) {
			address.style.display = 'block'
			toggleButton.innerText = 'Hide Address'
		} else {
			address.style.display = 'none'
			toggleButton.innerText = 'Show Address'
		}
	}

	connectedCallback() {
		this.shadowRoot.querySelector('#toggle-address').addEventListener('click', () => this.toggleAddress())
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector('#toggle-address').removeEventListener()
	}
}

window.customElements.define('user-card', UserCard)
