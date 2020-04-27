# USEFUL YARN SCRIPTS

1. `yarn audit [--verbose] [--json] [--level] [--groups]` [#](https://classic.yarnpkg.com/en/docs/cli/audit#toc-yarn-audit)

   Checks for known security issues with the installed packages.

1. `yarn check` [#](https://classic.yarnpkg.com/en/docs/cli/check#toc-yarn-check)

   Verifies that versions of the package dependencies in the current project’s `package.json` match those in yarn’s lock file.

1. `yarn info <package> [<field>]` [#](https://classic.yarnpkg.com/en/docs/cli/info#toc-yarn-info)

   Shows information about a package.

   ```bash
   yarn info react versions
   yarn info redux repository
   ```

1. `yarn link` [#](https://classic.yarnpkg.com/en/docs/cli/link#toc-yarn-link-in-package-you-want-to-link)

   Symlinks a package folder during development. Run this command in the package folder you’d like to link.

1. `yarn link [package...]` [#](https://classic.yarnpkg.com/en/docs/cli/link#toc-yarn-link-package)

   Links another package that you’d like to test into your current project.

   ```bash
   yarn link cb-hooks
   ```

1. `yarn list [--depth] [--pattern]` [#](https://classic.yarnpkg.com/en/docs/cli/list#toc-yarn-list)

   Lists all dependencies for the current working directory by referencing all package manager meta data files, which includes a project’s dependencies.

   By default, all packages and their dependencies will be displayed. To restrict the depth of the dependencies, you can add a flag, `--depth <level>`.

   `--pattern <pattern>` will filter the list of dependencies by the pattern flag.

   ```bash
   yarn list
   yarn list --depth 0
   yarn list --pattern "cb-*"
   ```

1. `yarn outdated` [#](https://classic.yarnpkg.com/en/docs/cli/outdated#toc-yarn-outdated)

   Lists version information for all outdated package dependencies. This information includes the currently installed version, the desired version based on semver, and the latest available version.

1. `yarn outdated [package...]` [#](https://classic.yarnpkg.com/en/docs/cli/outdated#toc-yarn-outdated-package)

   Lists version information for one or more outdated package dependencies.

   ```bash
   yarn outdated cb-hooks cb-storage
   ```

1. `yarn unlink` [#](https://classic.yarnpkg.com/en/docs/cli/unlink#toc-yarn-unlink)

   Unlinks a previously created symlink for a package. Run this command in the folder that was previously used to create a link.

1. `yarn unlink [package]` [#](https://classic.yarnpkg.com/en/docs/cli/unlink#toc-yarn-unlink-package)

   Unlink a package that was symlinked during development in your project. You will need to run `yarn` or `yarn install` to re-install the package that was linked.

   ```bash
   yarn unlink cb-hooks
   ```

1. `yarn upgrade-interactive [--latest]` [#](https://classic.yarnpkg.com/en/docs/cli/upgrade-interactive#toc-yarn-upgrade-interactive)

   Display the outdated packages before performing any upgrade, allowing the user to select which packages to upgrade.

1. `yarn why <query>` [#](https://classic.yarnpkg.com/en/docs/cli/why#toc-yarn-why)

   Identifies why a package has been installed, detailing which other packages depend upon it.

   ```bash
   yarn why core-js
   ```

   The mandatory query argument for `yarn why` can be any of:

   - a package name (as in the above example)
   - a package folder; eg: yarn why node_modules/once
   - a file within a package folder; eg: yarn why node_modules/once/once.js

   The file locations can also be absolute.
