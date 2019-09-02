webix.protoUI({
    name: 'header',
    defaults: {
        height: 40,
        icon: undefined,
        title: 'Untitled'
    },
    $init: function (cfg)
    {
        this.$ready.push(() =>
        {
            if (this.config.icon === undefined)
            {
                this.$view.innerHTML = this.title;
            }
            else
            {
                this.$view.innerHTML = `<i class="fas fa-${this.config.icon}"></i> ${this.config.title}`;
            }
        });
        this.$view.className += ' webix_header';
        this.$view.innerHTML = '';
        this.$view.style.paddingLeft = '0.5rem';
    },
    $getSize: function (x, y)
    {
        // own logic
        // ...
        // parent logic
        return webix.ui.view.prototype.$getSize.call(this, x, y);
    },
    $setSize: function (x, y)
    {
        //if parent has changed its size
        if (webix.ui.view.prototype.$setSize.call(this, x, y))
        {
            //custom logic
        }
    },
    title_setter: function (value)
    {
        return value;
    },

    icon_setter: function (value)
    {
        return value;
    }
}, webix.ui.view);
