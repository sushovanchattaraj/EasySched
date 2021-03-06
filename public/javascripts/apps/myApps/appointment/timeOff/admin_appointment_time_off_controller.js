SuperAppManager.module('AdminAppointmentApp.TimeOff', function (TimeOff, SuperAppManager, Backbone, Marionette, $, _, moment) {

    TimeOff.Controller = {

        timeOffMaintain: function (adminAppointmentsListLayout) {

            timeOffmodel = new SuperAppManager.Entities.TimeOffModel();
            timeOffItemView = new TimeOff.TimeOffItemView({model: timeOffmodel});

            timeOffItemView.on('timeOff:save', function (data) {

                data.businessId = SuperAppManager.loggedInUser.get("_id");
                console.log(data);

                this.model.save(data, {
                    success: function (model, response) {
                        SuperAppManager.Flash.success('Time Off Saved');
                    },
                    error: function () {
                        SuperAppManager.Flash.error('Error in saving time off');
                    }
                });
            });

            adminAppointmentsListLayout.adminAppointmentsRegion.show(timeOffItemView);
        }
    }
});