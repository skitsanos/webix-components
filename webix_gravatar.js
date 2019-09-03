webix.protoUI({
    name: 'gravatar',
    defaults: {
        width: 40,
        height: 40,
        email: undefined,
        round: false
    },

    $init: function (config)
    {
        this.$ready.push(() =>
        {
            const hash = CryptoJS.MD5(this.config.email);
            let style = '';
            if (this.config.round)
            {
                style = 'border-radius: 50%';
            }
            this.$view.innerHTML = `<img src="https://www.gravatar.com/avatar/${hash}?s=${this.config.height - 2}" style="${style}"/>`;
        });

        this.$view.className += ' webix_gravatar';
    },

    email_setter: function (value)
    {
        return value;
    },

    round_setter: function (value)
    {
        return value;
    },

    $setSize: function (x, y)
    {
        if (webix.ui.view.prototype.$setSize.call(this, x, x))
        {
            const size = this.$view.style.width;
            const src = this.$view.firstChild.getAttribute('src').split('?')[0];
            this.$view.firstChild.setAttribute('src', `${src}?s=${size}`);
        }
    },
    on: {}
}, webix.ui.view);
