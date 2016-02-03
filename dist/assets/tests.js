define('github-galore/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('github-galore/tests/controllers/gists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/gists.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/gists.js should pass jshint.');
  });
});
define('github-galore/tests/controllers/repositories.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/repositories.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/repositories.js should pass jshint.');
  });
});
define('github-galore/tests/controllers/stars.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/stars.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/stars.js should pass jshint.');
  });
});
define('github-galore/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('github-galore/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('github-galore/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'github-galore/tests/helpers/start-app', 'github-galore/tests/helpers/destroy-app'], function (exports, _qunit, _githubGaloreTestsHelpersStartApp, _githubGaloreTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _githubGaloreTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _githubGaloreTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('github-galore/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('github-galore/tests/helpers/resolver', ['exports', 'ember/resolver', 'github-galore/config/environment'], function (exports, _emberResolver, _githubGaloreConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _githubGaloreConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _githubGaloreConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('github-galore/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('github-galore/tests/helpers/start-app', ['exports', 'ember', 'github-galore/app', 'github-galore/config/environment'], function (exports, _ember, _githubGaloreApp, _githubGaloreConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _githubGaloreConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _githubGaloreApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('github-galore/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('github-galore/tests/models/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/index.js should pass jshint.');
  });
});
define('github-galore/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('github-galore/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('github-galore/tests/routes/user/gists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/user');
  QUnit.test('routes/user/gists.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/gists.js should pass jshint.');
  });
});
define('github-galore/tests/routes/user/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/user');
  QUnit.test('routes/user/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/index.js should pass jshint.');
  });
});
define('github-galore/tests/routes/user/repositories.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/user');
  QUnit.test('routes/user/repositories.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/repositories.js should pass jshint.');
  });
});
define('github-galore/tests/routes/user/stars.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/user');
  QUnit.test('routes/user/stars.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/stars.js should pass jshint.');
  });
});
define('github-galore/tests/routes/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/user.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user.js should pass jshint.');
  });
});
define('github-galore/tests/test-helper', ['exports', 'github-galore/tests/helpers/resolver', 'ember-qunit'], function (exports, _githubGaloreTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_githubGaloreTestsHelpersResolver['default']);
});
define('github-galore/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('github-galore/tests/unit/controllers/gists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:gists', 'Unit | Controller | gists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('github-galore/tests/unit/controllers/gists-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/gists-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/gists-test.js should pass jshint.');
  });
});
define('github-galore/tests/unit/controllers/repositories-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:repositories', 'Unit | Controller | repositories', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('github-galore/tests/unit/controllers/repositories-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/repositories-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/repositories-test.js should pass jshint.');
  });
});
define('github-galore/tests/unit/controllers/stars-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:stars', 'Unit | Controller | stars', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('github-galore/tests/unit/controllers/stars-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/stars-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/stars-test.js should pass jshint.');
  });
});
define('github-galore/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-galore/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('github-galore/tests/unit/routes/user/gists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:user/gists', 'Unit | Route | user/gists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-galore/tests/unit/routes/user/gists-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/user');
  QUnit.test('unit/routes/user/gists-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/gists-test.js should pass jshint.');
  });
});
define('github-galore/tests/unit/routes/user/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:user/index', 'Unit | Route | user/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-galore/tests/unit/routes/user/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/user');
  QUnit.test('unit/routes/user/index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/index-test.js should pass jshint.');
  });
});
define('github-galore/tests/unit/routes/user/repositories-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:user/repositories', 'Unit | Route | user/repositories', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-galore/tests/unit/routes/user/repositories-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/user');
  QUnit.test('unit/routes/user/repositories-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/repositories-test.js should pass jshint.');
  });
});
define('github-galore/tests/unit/routes/user/stars-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:user/stars', 'Unit | Route | user/stars', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-galore/tests/unit/routes/user/stars-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/user');
  QUnit.test('unit/routes/user/stars-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/stars-test.js should pass jshint.');
  });
});
define('github-galore/tests/unit/routes/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:user', 'Unit | Route | user', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-galore/tests/unit/routes/user-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/user-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('github-galore/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map