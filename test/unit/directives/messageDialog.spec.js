"use strict";


describe('Directive messageDialog', function() {

    var $compile, $rootScope;

    var usageTemplate = '<message-dialog visible="ctrl.dialogVisible" \
                            title="ctrl.dialogTitle" \
                            on-yes="ctrl.performDeletion()" \
                            on-no="ctrl.cancelDeletion()"> \
                                Wollen Sie das Buch {{ ctrl.bookToDelete.title }} wirklich löschen? \
                         </message-dialog>';

    beforeEach(module('bitApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    it('should properly set the passed title', function() {
        var parentScope = $rootScope.$new();
        parentScope.ctrl = {
            dialogTitle: 'hallo welt!'
        };

        var scopeLinkingFn = $compile(usageTemplate);
        var jqElem = scopeLinkingFn(parentScope);
        parentScope.$apply();

        expect(jqElem.find('div.title').text()).toBe(parentScope.ctrl.dialogTitle.toUpperCase());
    });

});