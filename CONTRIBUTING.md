# Welcome to Jellybot contributing guide

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on our software :sparkles:.

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents icon on the top left corner of this document to get to a specific section of this guide quickly.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

### Issues

#### Create a new issue

If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/Carmoruda/Jellybot/issues/new/choose).

#### Solve an issue

Scan through our [existing issues](https://github.com/Carmoruda/Jellybot/issues) to find one that interests you. You can narrow down the search using `labels` as filters As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes in the UI

Click **Make a contribution** at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review.

#### Make changes locally

1. [Install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).

2. Fork the repository.

- Using GitHub Desktop:

  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:

  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

- GitHub Codespaces:
  - [Fork, edit, and preview](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/creating-a-codespace) using [GitHub Codespaces](https://github.com/features/codespaces) without having to install and run the project locally.

3. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. See [Atom's contributing guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages) to know how to use emoji for commit messages.

#### Suggested emojis

| Text |        Emoji        | GFM shortcode\*       | Windows 10 picker name | Description                                                        |
| :--: | :-----------------: | :-------------------- | :--------------------- | :----------------------------------------------------------------- |
| `🎉` |       :tada:        | `:tada:`              | `party popper`         | initial commit                                                     |
| `✨` |     :sparkles:      | `:sparkles:`          | `sparkles`             | when introducing new features                                      |
| `🎨` |        :art:        | `:art:`               | `artist palette`       | when improving the format/structure of the code                    |
| `💄` |     :lipstick:      | `:lipstick:`          | `lipstick`             | when improving UI/cosmetic                                         |
| `📦` |      :package:      | `:package:`           | `package`              | when refactoring or improving code                                 |
| `🐎` |     :racehorse:     | `:racehorse:`         | `horse`                | when improving performance                                         |
| `🔒` |       :lock:        | `:lock:`              | `locked`               | when dealing with security                                         |
| `🔧` |      :wrench:       | `:wrench:`            | `wrench`               | when updating configs                                              |
| `♿` |    :wheelchair:     | `:wheelchair:`        | `wheelchair symbol`    | when improving accessibility                                       |
| `🚀` |      :rocket:       | `:rocket:`            | `rocket`               | when improving dev tools (anything related to deyployments/devops) |
| `📝` |      :pencil:       | `:pencil:`            | `pencil`               | when writing docs (e.g. README, code comments)                     |
| `📰` |     :newspaper:     | `:newspaper:`         | `newspaper`            | when creating a new file                                           |
| `💎` |        :gem:        | `:gem:`               | `gem stone`            | new release                                                        |
| `🐛` |        :bug:        | `:bug:`               | `bug`                  | when fixing a bug                                                  |
| `💥` |       :boom:        | `:boom:`              | `collision`            | when fixing a crash                                                |
| `🚱` | :non-potable_water: | `:non-potable_water:` | `non-potable water`    | when fixing a memory leak                                          |
| `🔥` |       :fire:        | `:fire:`              | `fire`                 | when removing code or files                                        |
| `✅` | :white_check_mark:  | `:white_check_mark:`  | `check mark button`    | when adding new tests                                              |
| `💚` |    :green_heart:    | `:green_heart:`       | `green heart`          | when fixing the CI build                                           |
| `👕` |       :shirt:       | `:shirt:`             | `t-shirt`              | when fixing linter warnings                                        |
| `📡` |     :satellite:     | `:satellite:`         | `satellite antenna`    | when adding instrumentation or metrics                             |
| `🔊` |    :loud_sound:     | `:loud_sound:`        | `speaker high volume`  | when adding logging                                                |
| `🔇` |       :mute:        | `:mute:`              | `muted speaker`        | when removing logging                                              |
| `⬆`  |     :arrow_up:      | `:arrow_up:`          | `up arrow`             | when upgrading dependencies                                        |
| `⬇`  |    :arrow_down:     | `:arrow_down:`        | `down arrow`           | when downgrading dependencies                                      |
| `⚡` |        :zap:        | `:zap:`               | `high voltage`         | when making a backwards-incompatible change\*\*                    |
| `🚧` |   :construction:    | `:construction:`      | `construction`         | when the change is a work in progress (do not merge)\*\*           |

- GFM shortcodes are recognized by any software that uses GitHub Flavored Markdown.
  \*\* These emoji are often combined with another primary emoji.

### Pull Request

When you're finished with the changes, [create a pull request](https://github.com/Carmoruda/Jellybot/compare), also known as a PR.

- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
  Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://lab.github.com/githubtraining/managing-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The Jellybot team thanks you :sparkles:.

Once your PR is merged, your contributions will be publicly visible on Jellybot.
